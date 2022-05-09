import { signOut } from 'firebase/auth';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import { AuthContext } from '../../contexts/AuthContext';
import { auth } from '../../libs/firebase';
import SingleLogo from './SingleLogo';
import Loading from '../onLoad/Loading';

const NavigationLoggedIn = () => {
  const [expand, setExpand] = useState(false);
  const { loggedUser, setLoggedUser, currentUserData } = useContext(AuthContext);
  const router = useRouter();
  const handleSignOut = () => {
    swal('Đã đăng xuất!', '', 'success');
    signOut(auth)
      .then(() => {
        setLoggedUser(null);
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  if (!currentUserData) return <Loading />;

  return (
    <div className="navigation">
      <div className="flex-nav-item">
        <SingleLogo />
        <div className="nav-item">
          <Link href="/faq" passHref>
            <a className={`${router.pathname === '/faq' && 'faq_actived'}`}>FAQ</a>
          </Link>
        </div>
        <div className="nav-item">
          <Link href="/donators" passHref>
            <a className={`${router.pathname === '/donators' && 'donators_actived'}`}>Người ủng hộ</a>
          </Link>
        </div>
      </div>
      <div className="flex-nav-item">
        {currentUserData.isPns.auth && (
          <div className="nav-item r-nav">
            <Link href={{ pathname: '/donators/register', query: { id: loggedUser?.uid } }} passHref>
              <a className="login">Trở thành người ủng hộ</a>
            </Link>
          </div>
        )}
        <div className="nav-item r-nav">
          <Link href={{ pathname: '/user/wallet', query: { id: loggedUser.uid } }} passHref>
            <a className="wallet">Ví của tôi</a>
          </Link>
        </div>
        <div className="nav-item">
          <div className="img-dropdown" onClick={() => setExpand(!expand)}>
            <img src={currentUserData.avatar.url || '/defaultAvatar.jpg'} alt="Avatar" />
          </div>
        </div>
        <div className="drop-down-content" style={{ display: expand ? 'block' : 'none' }}>
          <Link href={{ pathname: '/user/profile', query: { id: loggedUser?.uid } }} passHref>
            <a>
              <i className="bi bi-person-circle"></i> Trang cá nhân
            </a>
          </Link>
          <Link href={{ pathname: '/user/statistics', query: { id: loggedUser.uid } }} passHref>
            <a>
              <i className="bi bi-graph-down"></i> Thống kê
            </a>
          </Link>
          <a onClick={handleSignOut}>
            <i className="bi bi-box-arrow-in-right"></i> Đăng xuất
          </a>
          <div className="nav-item r-wd">
            <Link href={{ pathname: '/donators/register', query: { id: loggedUser.uid } }} passHref>
              <a className="login">Trở thành người ủng hộ</a>
            </Link>
          </div>
          <div className="nav-item r-wd">
            <Link href={{ pathname: '/user/wallet', query: { id: loggedUser?.uid } }} passHref>
              <a className="wallet">Ví của tôi</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationLoggedIn;
