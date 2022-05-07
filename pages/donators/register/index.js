import Link from 'next/link';

import { useState } from 'react';
import SingleLogo from '../../../components/layout/SingleLogo';
import MetaData from '../../../components/meta/MetaData';
import DonatorRegisterForm from '../../../components/user/DonatorRegisterForm';

const DonatorRegister = () => {
  const [display, setDisplay] = useState(false);

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
