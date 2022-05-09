import moment from 'moment';
import Link from 'next/link';
import { useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { DonateAction, ImagePopUp } from '../layout';
import { useContext } from 'react';
import { toDot } from '../../libs';

const PostDetail = ({ description, title, imgURL, isChecked, createdAt, user, value, given }) => {
  const [display, setDisplay] = useState(false);
  const [popUpImage, setPopUpImage] = useState(false);
  const { currentUserData } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <div className="PostDetail">
        <div className="post-detail-top">
          <div className="post-user-info">
            <div className="post-user-info-img">
              <img alt="avatar" src={user.avatar.url || '/defaultAvatar.jpg'} />
            </div>
            <div className="post-user-info-name">
              <Link href={{ pathname: '/user/profile', query: { id: user.id } }}>
                <a>{user.createdBy}</a>
              </Link>
              <cite>đăng lúc {moment(createdAt).format('hh:mm A, DD/MM/YYYY')}</cite>
            </div>
          </div>

          {/* set role's display hear */}
          {currentUserData.isDonator.auth && (
            <button className="donate-btn" onClick={() => setDisplay(true)}>
              Ủng hộ
            </button>
          )}
        </div>
        <div className="post-detail-content">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="post-detail-content-img center">
            {imgURL && <img alt="image" src={imgURL} onClick={() => setPopUpImage(true)} />}
          </div>
        </div>
        {isChecked && (
          <div className="post-detail-bottom">
            <h3>Mục tiêu</h3>
            <div className="target">
              <div className="target-amout" style={{ width: (given / value) * 100 + '%' }}></div>
            </div>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              Đã nhận được{' '}
              <span className="given">
                <b>
                  {toDot(given)}/{toDot(value)}
                </b>
              </span>{' '}
              VNĐ
            </div>
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
