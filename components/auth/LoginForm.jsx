import Link from 'next/link';
import swal from 'sweetalert';
import { useState } from 'react';
import { validate } from 'email-validator';
import { auth } from '../../libs/firebase';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  if (error) {
    swal('Lỗi!', error.message, 'error');

    return (
      <>
        <div className="center">
          <div className="LoginForm">
            <h1>Đăng nhập</h1>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              name="password"
            />
            <button className="login-btn" onClick={() => signInWithEmailAndPassword(email, password)}>
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
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    console.log(user);
    swal('Đăng nhập thành công!', '', 'success');
    // Redirect to Homepage
    return (
      <div>
        <p>Signed In User: {user.email}</p>
      </div>
    );
  }
  return (
    <>
      <div className="center">
        <div className="LoginForm">
          <h1>Đăng nhập</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Mật khẩu"
            name="password"
          />
          <button className="login-btn" onClick={() => signInWithEmailAndPassword(email, password)}>
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
