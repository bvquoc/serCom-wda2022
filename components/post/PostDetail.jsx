import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import DonateAction from '../layout/DonateAction';
import ImagePopUp from '../layout/ImagePopUp';

const PostDetail = ({ hrefId }) => {
  const [display, setDisplay] = useState(false);
  const [popUpImage, setPopUpImage] = useState(false);
  return (
    <>
      <div className="PostDetail">
        <div className="post-detail-top">
          <div className="post-user-info">
            <div className="post-user-info-img">
              <Image alt="avatar" src="/icon-512x512.png" width={512} height={512} objectFit="contain" />
            </div>
            <div className="post-user-info-name">
              <Link href={{ pathname: '/user/profile', query: { id: hrefId } }}>
                <a>Họ và tên</a>
              </Link>
              <cite>đăng lúc time</cite>
            </div>
          </div>

          {/* set role's display hear */}
          {true && (
            <button className="donate-btn" onClick={() => setDisplay(true)}>
              Ủng hộ
            </button>
          )}
        </div>
        <div className="post-detail-content">
          <h2>Tiêu đề</h2>
          <p>Mô tả</p>
          <div className="post-detail-content-img center">
            <Image
              alt="image"
              src="/icon-512x512.png"
              width={256}
              height={256}
              objectFit="contain"
              quality={75}
              onClick={() => setPopUpImage(true)}
            />
          </div>
        </div>
        <div className="post-detail-bottom">
          <h3>Mục tiêu</h3>
          <div className="target">
            <div className="target-amout"></div>
          </div>
          <div style={{ textAlign: 'center' }}>Đã nhận được 3/5 triệu</div>
        </div>
        <button className="vote-btn flex-space-between">
          <div>
            <i className={`bi bi-${!true ? 'heart' : 'heart-fill'}`}></i>
          </div>
          <div style={{ marginLeft: '0.5rem' }}>Bình chọn</div>
        </button>
      </div>
      {display && <DonateAction setDisplay={setDisplay} />}
      {popUpImage && <ImagePopUp imgURL={'/icon-512x512.png'} setDisplay={setPopUpImage} />}
    </>
  );
};

export default PostDetail;
