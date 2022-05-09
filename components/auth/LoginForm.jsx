import Link from 'next/link';
import swal from 'sweetalert';
import { useState, useEffect, useContext } from 'react';
import { validate } from 'email-validator';
import { auth } from '../../libs/firebase';
import { useRouter } from 'next/router';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../onLoad/Loading';
import { onInputChange } from '../../libs';
import MetaData from '../meta/MetaData';
import { AuthContext } from '../../contexts/AuthContext';

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
  }, [user, error, router]);

  const { save, setSave } = useContext(AuthContext);
  
  const handleSubmit = () => {
    const { email, password } = formData;
    if (!email || !password) {
      swal('Lỗi!', 'Vui lòng nhập đầy đủ thông tin', 'warning');
      return;
    }
    if (!validate(email)) {
      swal('Lỗi!', 'Email không hợp lệ', 'warning');
      return;
    }
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <MetaData title="Đăng nhập" description="Đăng nhập" />
      <div className="center">
        <div className="LoginForm" onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}>
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
          <label htmlFor="loginSave" className="flex-space-between">
            <span className="center">Nhớ mật khẩu</span>
            <i className={`bi bi-toggle-${!save ? 'off' : 'on'}`}></i>
          </label>
          <input type="checkbox" onChange={(e) => setSave(e.target.checked)} name="loginSave" id="loginSave" />
          <button className="login-btn" onClick={handleSubmit}>
            Đăng nhập
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
