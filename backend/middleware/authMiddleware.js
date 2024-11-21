import jwt from 'jsonwebtoken';

export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  
  if (!token) {
    return res.json({ error: 'Bạn không có quyền truy cập.' });
  }

  jwt.verify(token, "jwt-secret-key", (err, decoded) => {
    if (err) {
      return res.json({ error: 'Lỗi token.' });
    }

    req.user = {
      user_id: decoded.user_id,
      name: decoded.name,
      email: decoded.email,
      gender: decoded.gender,
      birthday: decoded.birthday,
      phonenumber: decoded.phonenumber,
      role: decoded.role,  
    };
    next();
  });
};

export const checkRole = (roles) => {
  return (req, res, next) => {
    const { role } = req.user; 

    if (!roles.includes(role)) {
      return res.json({ error: 'Bạn không có quyền thực hiện hành động này.' });
    }

    next(); 
  };
};
