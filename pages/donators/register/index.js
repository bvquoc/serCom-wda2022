import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { SingleLogo } from '../../../components/layout';
import MetaData from '../../../components/meta/MetaData';
import Loading from '../../../components/onLoad/Loading';
import DonatorRegisterForm from '../../../components/user/DonatorRegisterForm';
import { getUser } from '../../../service';
import Custom404 from '../../404';

const DonatorRegister = () => {
  const [display, setDisplay] = useState(false);

  const [user, setUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (router.isReady) {
        getUser(router.query.id).then((res) => {
          if (res.length === 0) {
            router.isFallback = true;
          }
          setUser(res[0]);
        });
      }
    }
  }, [router.isReady]);

  if (router.isFallback) return <Custom404 />;
  if (!user) return <Loading />;

  return (
    <>
      <MetaData title="Trở thành người ủng hộ" description="Đăng kí trở thành Người ủng hộ" />
      <SingleLogo />
      <div className="center">
        <div className="DonatorRegister">
          <div style={{ display: display ? 'none' : 'block' }}>
            <h1>Đăng kí trở thành Người ủng hộ</h1>
            <p>Bạn có chắc chắn muốn trở thành Người ủng hộ chứ ?</p>

            <button className="donate-register-btn donate-register-btn1" onClick={() => setDisplay(!display)}>
              Chắc chắn
            </button>

            <Link href="/" passHref>
              <a>
                <button className="donate-register-btn donate-register-btn2">Trở về trang chủ</button>
              </a>
            </Link>
          </div>
          <DonatorRegisterForm display={display} setDisplay={setDisplay} />
        </div>
      </div>
    </>
  );
};

export default DonatorRegister;
