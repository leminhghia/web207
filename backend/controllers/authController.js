import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

export const register = (req, res) => {
  const { surName, name, email, password, role = 'student' } = req.body;

  const checkEmailSql = "SELECT * FROM user WHERE email = ?";
  db.query(checkEmailSql, [email], (err, data) => {
    if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });

    if (data.length > 0) {
      return res.json({ Error: "Email đã tồn tại" });
    }

    bcrypt.hash(password.toString(), salt, (err, hash) => {
      if (err) return res.json({ Error: "Lỗi mã hóa mật khẩu" });

      const sql = "INSERT INTO user (surName, name, email, password, role, created_at) VALUES (?, ?, ?, ?, ?, NOW())";
      const values = [surName, name, email, hash, role];

      db.query(sql, values, (err, result) => {
        if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
        return res.json({ Status: "success", user_id: result.insertId });
      });
    });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM user WHERE email = ?";
  db.query(sql, [email], (err, data) => {
    if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });
    if (data.length > 0) {
      bcrypt.compare(password, data[0].password, (err, result) => {
        if (err) return res.json({ Error: "Lỗi so sánh mật khẩu" });

        if (result) {
          const { user_id, surName, name, email, role } = data[0];
          const token = jwt.sign(
            { user_id, surName, name, email, role },  
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
};

export const getUser = (req, res) => {
  const { user_id, surName, name, email, role } = req.user;
  return res.json({ user_id, surName, name, email, role });  
};


export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "success" });
};
