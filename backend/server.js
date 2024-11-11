import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const salt = 10;
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "web207"
});

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Error: "Bạn không có quyền truy cập" });
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if (err) {
                return res.json({ Error: "Lỗi token" });
            } else {
                req.user = {
                    useId: decoded.useId,
                    surName: decoded.surName,
                    name: decoded.name,
                    email: decoded.email
                };
                next();
            }
        });
    }
};



app.get('/user', verifyUser, (req, res) => {
    const { useId,surName, name, email } = req.user;
    return res.json({ useId,surName, name, email });
});


app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (`surName`,`name`,`email`,`password`) VALUES (?)";
    bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
        if (err) return res.json({ Error: "Lỗi mã hóa mật khẩu" });

        const values = [
            req.body.surName,
            req.body.name,
            req.body.email,
            hash
        ];
        db.query(sql, [values], (err, result) => {
            if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
            return res.json({ Status: "success" });
        });
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ?";
    db.query(sql, [req.body.email], (err, data) => {
        if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
        if (data.length > 0) {
            bcrypt.compare(req.body.password, data[0].password, (err, result) => {
                if (err) return res.json({ Error: "Lỗi so sánh mật khẩu" });
                if (result) {
                    const {  useId,surName, name, email } = data[0];
                    const token = jwt.sign({ useId,surName, name, email }, "jwt-secret-key", { expiresIn: '1d' });
                    res.cookie('token', token);
                    return res.json({ Status: "success" });
                } else {
                    return res.json({ Error: "Mật khẩu không khớp" });
                }
            });
        } else {
            return res.json({ Error: "Email không tồn tại" });
        }
    });
});

app.get('/logout',(req,res)=>{
    res.clearCookie('token');
    return res.json({Status: 'success'})
})


app.listen(2000, () => {
    console.log("OK");
});
