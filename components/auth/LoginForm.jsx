import Link from 'next/link';
import swal from 'sweetalert';
import { useState, useEffect } from 'react';
import { validate } from 'email-validator';
import { auth } from '../../libs/firebase';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../onLoad/Loading';
import { onInputChange } from '../../libs';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

  const router = useRouter();
  useEffect(() => {
    if (user) {
      console.log(user);
      swal('Thành công!', 'Bạn đã đăng nhập thành công!', 'success');
      router.push('/');
    }
    if (error) swal('Lỗi!', error.message, 'error');
  }, [user, error]);

  const handleSubmit = () => {
    const { email, password } = formData;
    if (!email || !password) {
      swal('Lỗi!', 'Vui lòng nhập đầy đủ thông tin', 'warning');
      return;
    }
    if(!validate(email)) {
      swal('Lỗi!', 'Email không hợp lệ', 'warning');
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="center">
        <div className="LoginForm">
          <h1>Đăng nhập</h1>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Email"
            name="email"
          />
          <input
            type="password"
            value={formData.password}
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
      {loading && <Loading />}
    </>
  );
}
