import Image from 'next/image';
import Link from 'next/link';
import swal from 'sweetalert';

export const PostDetail = () => {
  const handleDonate = () => {
    swal('Successful! Thank you for your donation!', '', 'success');
  };

  return (
    <>
      <div className="PostDetail">
        <div className="post-detail-top">
          <div className="post-user-info">
            <div className="post-user-info-img">
              <Image alt="avatar" src="/icon-512x512.png" width={512} height={512} objectFit="contain" />
            </div>
            <div className="post-user-info-name">
              <Link href="/user/[slug]">
                <a>Họ và tên</a>
              </Link>
              <cite>đăng lúc time</cite>
            </div>
          </div>
          <button className="donate-btn" onClick={handleDonate}>
            Ủng hộ
          </button>
        </div>
        <div className="post-detail-content">
          <h2>Tiêu đề</h2>
          <p>Mô tả</p>
          <div className="post-detail-content-img center">
            <Image alt="avatar" src="/icon-512x512.png" width={256} height={256} objectFit="contain" />
          </div>
        </div>
        <div className="post-detail-bottom">
          <h3>Mục tiêu</h3>
          <div className='target'>
            <div className="target-amout"></div>
          </div>
            <div style={{textAlign: "center"}}>Đã nhận được 3/5 triệu</div>
        </div>
          <button className='vote-btn'>Bình chọn</button>
      </div>
    </>
  );
};

export default PostDetail;
