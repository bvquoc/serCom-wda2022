import React from "react";
import Link from "next/link";

export default function LoginForm() {
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, password } = formData;
    if (!username || !password) return;
    console.log(formData);
  };

  return (
    <>
      <div className="center">
        <div className="LoginForm">
          <h1>Đăng nhập</h1>
          <input
            type="text"
            onChange={(e) => onInputChange(e)}
            placeholder="Tên người dùng"
            name="username"
          />
          <input
            type="password"
            onChange={(e) => onInputChange(e)}
            placeholder="Mật khẩu"
            name="password"
          />
          <button className="login-btn" onClick={handleSubmit}>
            Login
          </button>
          <div>Chưa có tài khoản ?</div>
          <a>
            <Link href="/register" passHref>
              <button className="register-btn">Đăng kí</button>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
