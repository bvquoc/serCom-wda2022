import Link from 'next/link';
import { useState } from 'react';
import { onInputChange } from '../../libs';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    fullName: '',
    email: '',
    confirmPassword: '',
  });

  const handleSubmit = () => {
    const { username, password, confirmPassword, email, fullName } = formData;
    if (!username || !password || !confirmPassword || !email || !fullName) {
      swal('Vui lòng nhập đầy đủ thông tin!', '', 'warning');
      return;
    }
    console.log(formData);
  };

  return (
    <>
      <div className="center">
        <div className="RegisterForm">
          <h1>Đăng kí</h1>
          <input
            type="text"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Tên người dùng"
            name="username"
          />

          <input
            type="text"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Họ và tên"
            name="fullName"
          />

          <input
            type="email"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Email"
            name="email"
          />

          <input
            type="password"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Mật khẩu"
            name="password"
          />

          <input
            type="password"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Xác nhận mật khẩu"
            name="confirmPassword"
          />
          <button className="register-btn" onClick={handleSubmit}>
            Đăng kí
          </button>
          <div>Đã có tài khoản ?</div>
          <a>
            <Link href="/login" passHref>
              <button className="login-btn">Đăng nhập ngay</button>
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}
