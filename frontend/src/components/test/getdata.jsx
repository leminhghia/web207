import React, { useState, useEffect } from "react";

function App() {
  // State để lưu trữ danh sách nhân viên
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Gọi API để lấy dữ liệu nhân viên khi component được mount
  useEffect(() => {
    fetch("http://localhost:2000/employees")
      .then((response) => response.json())
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Có lỗi xảy ra khi tải dữ liệu");
        setLoading(false);
      });
  }, []);

  // Hiển thị thông tin
  return (
    <div className="App">
      <h1>Danh Sách Nhân Viên</h1>

      {loading && <p>Đang tải dữ liệu...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && (
        <table border="1" cellPadding="5" cellSpacing="0">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Age</th>
              {/* Thêm các cột tùy ý từ bảng dữ liệu của bạn */}
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.EmpID}>
                <td>{employee.Firstname}</td>
                <td>{employee.Lastname}</td>
                <td>{employee.Gender}</td>
                <td>{employee.Age}</td>
                {/* Hiển thị các dữ liệu khác từ bảng */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
