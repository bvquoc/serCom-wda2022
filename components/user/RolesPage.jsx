import { useState } from 'react';
import PostManageModal from '../management/PostManageModal'
import PostDetail from '../post/PostDetail';

const RolesPage = ({role}) => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="UserPosts">
        <div className="flex-space-between">
          <h2>Bài viết đã { role === "pns" ? "đăng" : "ủng hộ"}</h2>
          <div className="post-manage center">
            {role === 'pns' && (
              <button className="post-manage-btn" onClick={() => setDisplay(true)}>
                <i className="bi bi-gear"></i> Quản lí bài viết
              </button>
            )}
          </div>
        </div>
        <PostDetail role={role} />
      </div>
      {display && <PostManageModal setDisplay={setDisplay} />}
    </>
  );
};

export default RolesPage;
