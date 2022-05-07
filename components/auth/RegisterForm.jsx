import Link from 'next/link';
import { useState } from 'react';
import swal from 'sweetalert';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../libs/firebase';
import { validate } from 'email-validator';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [telephone, setTelephone] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

  if (error) {
    swal('Lỗi!', error.message, 'error');
    <>
      <div className="center">
        <div className="RegisterForm">
          <h1>Đăng kí</h1>

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <input
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Xác nhận mật khẩu"
            name="confirmPassword"
          />

          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Họ và tên"
            name="fullname"
          />

          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Số điện thoại"
            name="telephone"
          />

          <button
            className="register-btn"
            onClick={() => {
              if (!password || !confirmPassword || !email || !fullname || !telephone) {
                swal('Vui lòng nhập đầy đủ thông tin!', '', 'warning');
                return;
              }
              if (!validate(email)) {
                swal('Địa chỉ email không hợp lệ!', '', 'warning');
                return;
              }
              if (password != confirmPassword) {
                swal('Vui lòng xác nhận lại mật khẩu!', '', 'warning');
                return;
              }

              return createUserWithEmailAndPassword(email, password);
            }}
          >
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
    </>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(`Registered User:\n`);
    console.log(user);
    // Redirect to Homepage
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }
  return (
    <>
      <div className="center">
        <div className="RegisterForm">
          <h1>Đăng kí</h1>

          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          <input
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Xác nhận mật khẩu"
            name="confirmPassword"
          />

          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="Họ và tên"
            name="fullname"
          />

          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Số điện thoại"
            name="telephone"
          />

          <button
            className="register-btn"
            onClick={() => {
              if (!password || !confirmPassword || !email || !fullname || !telephone) {
                swal('Vui lòng nhập đầy đủ thông tin!', '', 'warning');
                return;
              }
              if (!validate(email)) {
                swal('Địa chỉ email không hợp lệ!', '', 'warning');
                return;
              }
              if (password != confirmPassword) {
                swal('Vui lòng xác nhận lại mật khẩu!', '', 'warning');
                return;
              }

              return createUserWithEmailAndPassword(email, password);
            }}
          >
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
