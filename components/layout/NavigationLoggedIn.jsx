import Image from 'next/image';
import Link from 'next/link';
import SingleLogo from './SingleLogo';
import { useState, useContext } from 'react';
import firebase from '../../libs/firebase';
import { auth } from '../../libs/firebase';
import { signOut } from 'firebase/auth';
import { AuthContext } from '../../contexts/AuthContext';

const NavigationLoggiedIn = () => {
  const [expand, setExpand] = useState(false);
  const { setLoggedUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setLoggedUser(null);
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navigation">
      <div className="flex-nav-item">
        <SingleLogo />
        <div className="nav-item">
          <Link href="/faq" passHref>
            <a>FAQ</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/donators" passHref>
            <a>Người ủng hộ</a>
          </Link>
        </div>
      </div>
      <div className="flex-nav-item">
        <div className="nav-item">
          <Link href="/donators/register" passHref>
            <a className="login">Trở thành người ủng hộ</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href={{ pathname: '/user/wallet', query: { id: '1', role: 'pns' } }} passHref>
            <a className="wallet">Ví của tôi</a>
          </Link>
        </div>
        <div className="nav-item">
          <div className="img-dropdown" onClick={() => setExpand(!expand)}>
            <Image src="/icon-512x512.png" alt="Avatar" objectFit="contain" width={512} height={512} priority />
          </div>
        </div>
        <div className="drop-down-content" style={{ display: expand ? 'block' : 'none' }}>
          <Link href={{ pathname: '/user/profile', query: { id: '1', role: 'pns' } }} passHref>
            <a>
              <i className="bi bi-person-circle"></i> Trang cá nhân
            </a>
          </Link>
          <Link href="/user/statistics" passHref>
            <a>
              <i className="bi bi-graph-down"></i> Thống kê
            </a>
          </Link>
          <a onClick={handleSignOut}>
            <i className="bi bi-box-arrow-in-right"></i> Đăng xuất
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavigationLoggiedIn;
