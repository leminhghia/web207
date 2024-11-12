import express from "express";
import mysql from "mysql";
import cors from "cors";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";

const salt = 10
const app = express()

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5174"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
app.use(cookieParser());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "web207",
});

const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ Error: "Bạn không có quyền truy cập" });
  } else {
    jwt.verify(token, "jwt-secret-key", (err, decoded) => {
      if (err) {
        return res.json({ Error: "Lỗi token" });
      } else {
        req.user = {
          useId: decoded.useId,
          surName: decoded.surName,
          name: decoded.name,
          email: decoded.email,
        };
        next();
      }
    });
  }
};

app.get("/user", verifyUser, (req, res) => {
  const { useId, surName, name, email } = req.user;
  return res.json({ useId, surName, name, email });
});

app.post("/register", (req, res) => {
  const sql =
    "INSERT INTO users (`surName`,`name`,`email`,`password`) VALUES (?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Lỗi mã hóa mật khẩu" });

    const values = [req.body.surName, req.body.name, req.body.email, hash];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
      return res.json({ Status: "success" });
    });
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
    if (data.length > 0) {
      bcrypt.compare(req.body.password, data[0].password, (err, result) => {
        if (err) return res.json({ Error: "Lỗi so sánh mật khẩu" });
        if (result) {
          const { useId, surName, name, email } = data[0];
          const token = jwt.sign(
            { useId, surName, name, email },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );
          res.cookie("token", token);
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

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "success" });
});

app.get("/subjects", (req, res) => {
  const sql = "SELECT * FROM subject";
  db.query(sql, (err, data) => {
    if (err) {
      return res.json({ Error: "error" });
    }
    return res.json(data);
  });
});

app.post("/registerSubject", verifyUser, (req, res) => {
  const { useId } = req.user;
  const { subId } = req.body;

  const sql = "SELECT * FROM user_subject WHERE useId = ? AND subId = ?";
  db.query(sql, [useId, subId], (err, data) => {
    if (err) return res.json({ Error: "a" });

    if (data.length > 0) return res.json({message:"Đã đăng kí môn học"});

    const add = "INSERT INTO user_subject (useId,subId) VALUES ?";
    const values = [[useId, subId]];
    db.query(add, [values], (err, data) => {
      if (err) return res.json({ Error: "b" });
      return res.json({message:"Đăng kí môn học thành công"});
    });
  });
});

app.get('/checkSubRes', verifyUser, (req, res) => {
  const sql = 'SELECT * FROM user_subject ';
  db.query(sql, (err, data) => {
    if (err){
      return res.json({ Error: "a" });
    }
   return res.json(data)
  });
});

app.get("/quiz/:subId", verifyUser, (req, res) => {
  const { subId } = req.params;
  const sql = `SELECT q.queId, q.content AS question, a.ansId, a.content AS answer, a.is_correct
            FROM question q JOIN answer a ON q.queId = a.queId WHERE q.subId = ?`;
  db.query(sql, [subId], (err, data) => {
    if (err) return res.json({ Error: "err" });
    const questions = data.reduce((a, b) => {
      const { queId, question, ansId, answer, is_correct } = b;
      const exitsQuetion = a.find((q) => q.queId === queId);
      if (exitsQuetion) {
        exitsQuetion.answers.push({ ansId, answer, is_correct });
      } else {
        a.push({ queId, question, answers: [{ ansId, answer, is_correct }] });
      }
      return a;
    }, []);
    return res.json(questions);
  });
});

app.post("/quiz/submit", verifyUser, (req, res) => {
  const { answers, subId } = req.body;
  const { useId } = req.user;
  const sql = `SELECT q.queId, a.ansId
               FROM question q JOIN answer a ON q.queId = a.queId
               WHERE q.subId = ? AND a.is_correct = 1`;

  db.query(sql, [subId], (err, data) => {
    if (err) return res.json({ Error: "Error" });

    let score = 0;
    data.forEach((correctAnswer) => {
      const userAnswer = answers[correctAnswer.queId];
      
      if (userAnswer === correctAnswer.ansId) {
        score += 1;
      }
    });

    const insertSql = `INSERT INTO result (score, date, time, useId) VALUES (?, CURDATE(), CURTIME(), ?)`;

    db.query(insertSql, [score, useId], (err, result) => {
      if (err) return res.json({ Error: "Error saving result" });
      res.json({ score, message: "Quiz result saved successfully" });
    });
  });
});

app.get('/result',verifyUser,(req,res)=>{
  const sql = 'SELECT * FROM result ';
  db.query(sql, (err, data) => {
    if (err){
      return res.json({ Error: "a" });
    }
   return res.json(data)
  });
})

app.listen(2000, () => {
  console.log("OK");
});
