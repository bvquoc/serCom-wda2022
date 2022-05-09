import Link from 'next/link';
import SingleLogo from './SingleLogo';
import { useRouter } from 'next/router';

const Navigation = () => {
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
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
          <div className="nav-item r-lr">
            <Link href="/login" passHref>
              <a className="login">Đăng nhập</a>
            </Link>
          </div>
          <div className="nav-item r-lr">
            <Link href="/register" passHref>
              <a className="register">Đăng kí</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="navStick">
        <div className="flex-nav-item">
          <div className="nav-item">
            <Link href="/login" passHref>
              <a className="login">Đăng nhập</a>
            </Link>
          </div>
          <div className="nav-item">
            <Link href="/register" passHref>
              <a className="register">Đăng kí</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
