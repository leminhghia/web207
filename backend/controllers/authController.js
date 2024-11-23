import db from "../config/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const salt = 10;

export const register = (req, res) => {
  const { name, email, password, role = 'student' } = req.body;

  const checkEmailSql = "SELECT * FROM user WHERE email = ?";
  db.query(checkEmailSql, [email], (err, data) => {
    if (err) return res.json({ Error: "Lỗi cơ sở dữ liệu" });

    if (data.length > 0) {
      return res.json({ Error: "Email đã tồn tại" });
    }

    bcrypt.hash(password.toString(), salt, (err, hash) => {
      if (err) return res.json({ Error: "Lỗi mã hóa mật khẩu" });

      const sql = "INSERT INTO user ( name, email, password, role, created_at) VALUES (?, ?, ?, ?, NOW())";
      const values = [name, email, hash, role];

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
          const { user_id, name, email, role, gender, birthday, phonenumber } = data[0];
          const token = jwt.sign(
            { user_id, name, email, role, gender, birthday, phonenumber },
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
  const { user_id, name, email, role, gender, birthday, phonenumber } = req.user;
  return res.json({ user_id, name, email, role, gender, birthday, phonenumber });
};

export const updateUser = (req, res) => {
  const { name, phonenumber, gender, birthday } = req.body;

  // Lấy user_id từ middleware verifyUser
  const { user_id } = req.user;

  const sql = `UPDATE user SET name = ?, phonenumber = ?, gender = ?, birthday = ? WHERE user_id = ?`;

  db.query(sql, [name, phonenumber, gender, birthday, user_id], (err, result) => {
    if (err) {
      console.error("Lỗi:", err);
      return res.json({ Error: "Lỗi cơ sở dữ liệu" });
    }

    if (result.affectedRows > 0) {
      const selectSql = "SELECT * FROM user WHERE user_id = ?";
      db.query(selectSql, [user_id], (err, data) => {
        if (err) {
          console.error("Lỗi:", err);
          return res.json({ Error: "Lỗi cơ sở dữ liệu khi lấy dữ liệu người dùng" });
        }

        if (data.length > 0) {
          const { user_id, name, email, role, gender, birthday, phonenumber } = data[0];
          const token = jwt.sign(
            { user_id, name, email, role, gender, birthday, phonenumber },
            "jwt-secret-key",
            { expiresIn: "1d" }
          );

          res.clearCookie("token");
          res.cookie("token", token);

          return res.json({ message: "Cập nhật thành công", token });
        } else {
          return res.json({ Error: "Không tìm thấy người dùng" });
        }
      });
    } else {
      return res.json({ message: "Không có thay đổi nào được thực hiện" });
    }
  });
};

export const updatePassword = async (req, res) => {
  const { user_id } = req.user; // Lấy user_id từ token middleware
  const { currentPassword, newPassword } = req.body; // Lấy mật khẩu hiện tại và mật khẩu mới từ client

  try {
    // Bước 1: Lấy thông tin người dùng từ database
    const sqlSelect = "SELECT * FROM user WHERE user_id = ?";
    db.query(sqlSelect, [user_id], async (err, result) => {
      if (err) return res.status(500).json({ message: "Lỗi server", error: err });

      if (result.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy người dùng" });
      }

      const user = result[0];

      // Bước 2: Kiểm tra mật khẩu hiện tại
      const isMatch = await bcrypt.compare(currentPassword, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Mật khẩu hiện tại không đúng" });
      }

      // Bước 3: Mã hóa mật khẩu mới
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      // Bước 4: Cập nhật mật khẩu mới vào database
      const sqlUpdate = "UPDATE user SET password = ? WHERE user_id = ?";
      db.query(sqlUpdate, [hashedPassword, user_id], (err, data) => {
        if (err) return res.status(500).json({ message: "Lỗi khi cập nhật mật khẩu", error: err });

        // Tạo token mới sau khi cập nhật mật khẩu
        const { name, email, role, gender, birthday, phonenumber } = user;
        const token = jwt.sign(
          { user_id, name, email, role, gender, birthday, phonenumber },
          "jwt-secret-key",
          { expiresIn: "1d" }
        );

        res.clearCookie("token");
        res.cookie("token", token);

        return res.status(200).json({ message: "Cập nhật mật khẩu thành công", token });
      });
    });
  } catch (error) {
    return res.status(500).json({ message: "Lỗi server", error });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  return res.json({ Status: "success" });
};
