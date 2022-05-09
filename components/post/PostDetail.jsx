import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { DonateAction, ImagePopUp } from '../layout';
import moment from 'moment';

const PostDetail = ({ description, title, imgURL, isTarget, createdAt, createdBy }) => {
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
              <Link href={{ pathname: '/user/profile', query: { id: '1' } }}>
                <a>{createdBy}</a>
              </Link>
              <cite>đăng lúc {moment(createdAt).format('dd/mm/yyyy')}</cite>
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
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="post-detail-content-img center">
            <img alt="image" src={imgURL} onClick={() => setPopUpImage(true)} />
          </div>
        </div>
        {isTarget && (
          <div className="post-detail-bottom">
            <h3>Mục tiêu</h3>
            <div className="target">
              <div className="target-amout"></div>
            </div>
            <div style={{ textAlign: 'center' }}>Đã nhận được 3/5 triệu</div>
          </div>
        )}
        <button className="vote-btn flex-space-between">
          <div>
            <i className={`bi bi-${!true ? 'heart' : 'heart-fill'}`}></i>
          </div>
          <div style={{ marginLeft: '0.5rem' }}>Bình chọn</div>
        </button>
      </div>
      {display && <DonateAction setDisplay={setDisplay} />}
      {popUpImage && <ImagePopUp imgURL={imgURL} setDisplay={setPopUpImage} />}
    </>
  );
};

export default PostDetail;
