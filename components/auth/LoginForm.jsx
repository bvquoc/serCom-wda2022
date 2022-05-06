import Link from 'next/link';
import swal from 'sweetalert';
import { useState } from 'react';
import { onInputChange } from '../../libs';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = () => {
    const { username, password } = formData;
    if (!username || !password) {
      swal('Vui lòng nhập đầy đủ thông tin!', '', 'warning');
      return;
    }
    console.log(formData);
    swal('Đăng nhập thành công!', '', 'success');
  };

  return (
    <>
      <div className="center">
        <div className="LoginForm">
          <h1>Đăng nhập</h1>
          <input
            type="text"
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Tên người dùng"
            name="username"
          />
          <input
            type="password"
            onChange={(e) => onInputChange(e, formData, setFormData)}
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
