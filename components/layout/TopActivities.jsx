import { useState } from 'react';
import { PostDetail } from '../post/PostDetail';

const TopActivities = () => {
  const [display, setDisplay] = useState(null);

  return (
    <>
      <h2>Những bài viết nổi bật</h2>
      <div className="TopActivities">
        <div
          className="high-rate-post"
          style={{ display: 'grid', alignContent: 'center' }}
          title="Nhấn vào để xem bài viết"
          onClick={() => setDisplay(true)}
        >
          <div>
            <div className="hr-post-title">Title</div>
            <div className="hr-post-user-full-name">Full Name</div>
          </div>
        </div>
        <div
          className="high-rate-post"
          style={{ display: 'grid', alignContent: 'center' }}
          title="Nhấn vào để xem bài viết"
        >
          <div>
            <div className="hr-post-title">Title</div>
            <div className="hr-post-user-full-name">Full Name</div>
          </div>
        </div>
        <div
          className="high-rate-post"
          style={{ display: 'grid', alignContent: 'center' }}
          title="Nhấn vào để xem bài viết"
        >
          <div>
            <div className="hr-post-title">Title</div>
            <div className="hr-post-user-full-name">Full Name</div>
          </div>
        </div>
        <div
          className="high-rate-post"
          style={{ display: 'grid', alignContent: 'center' }}
          title="Nhấn vào để xem bài viết"
        >
          <div>
            <div className="hr-post-title">Title</div>
            <div className="hr-post-user-full-name">Full Name</div>
          </div>
        </div>
        <div
          className="high-rate-post"
          style={{ display: 'grid', alignContent: 'center' }}
          title="Nhấn vào để xem bài viết"
        >
          <div>
            <div className="hr-post-title">Title</div>
            <div className="hr-post-user-full-name">Full Name</div>
          </div>
        </div>
      </div>
      {display && (
        <div className="wide-screen">
          <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
          <div className="center" style={{ minHeight: '100vh'}}>
            <div style={{width: "80%"}}>
              <PostDetail />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TopActivities;
