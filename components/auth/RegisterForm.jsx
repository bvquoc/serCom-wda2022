import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../libs/firebase';
import { validate } from 'email-validator';
import { onInputChange } from '../../libs';
import Loading from '../onLoad/Loading';
import MetaData from '../meta/MetaData';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    telephone: '',
  });

  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      swal('Thành công!', 'Bạn đã đăng ký thành công!', 'success');
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
    if (error) swal('Lỗi!', error.message, 'error');
  }, [user, error]);

  const handleSubmit = () => {
    const { email, password, confirmPassword, fullName, telephone } = formData;
    if (!password || !confirmPassword || !email || !fullName || !telephone) {
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
  };
  if (user)
    return (
      <>
        <MetaData title="Đăng ký" description="Đăng ký" />
        <h2>Đang chuyển bạn đến trang chính...</h2>
        <Loading />
      </>
    );
  return (
    <>
      <MetaData title="Đăng ký" description="Đăng ký" />
      <div className="center">
        <div className="RegisterForm" onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}>
          <h1>Đăng kí</h1>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Họ và tên"
            name="fullName"
          />

          <input
            type="tel"
            value={formData.telephone}
            onChange={(e) => onInputChange(e, formData, setFormData)}
            placeholder="Số điện thoại"
            name="telephone"
          />

          <input
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={(e) => onInputChange(e, formData, setFormData)}
            name="email"
          />

          <input
            placeholder="Mật khẩu"
            type="password"
            value={formData.password}
            onChange={(e) => onInputChange(e, formData, setFormData)}
            name="password"
          />

          <input
            type="password"
            value={formData.confirmPassword}
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
      {loading && <Loading />}
    </>
  );
}
