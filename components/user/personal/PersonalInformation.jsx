import Image from 'next/image';
import { useState } from 'react';
import UpdateUserInformation from '../../management/UpdateUserInformation';

const PersonalInformation = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div>
        <div className="PersonalInformation">
          <div className="pi-img center">
            <Image src="/icon-512x512.png" alt="Avatar" width={512} height={512} objectFit="contain" priority />
          </div>
          <div className="pi-info">
            <div className="pi-name">Họ và tên: </div>
            <div className="pi-email">Email</div>
            <div className="pi-phone">Số điện thoại: </div>
            <div className="pi-address">Địa chỉ: </div>
          </div>
          <button style={{ marginTop: '1rem' }} onClick={() => setDisplay(true)}>
            Chỉnh sửa thông tin cá nhân
          </button>
        </div>
      </div>
      {display && <UpdateUserInformation setDisplay={setDisplay} />}
    </>
  );
};

export default PersonalInformation;
