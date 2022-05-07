import {useState} from "react";
import PostManageModal from "../management/PostManageModal";
import PostDetail from './PostDetail';

const UserPosts = () => {
  const [display, setDisplay] = useState(false);
  return (
    <>
      <div className="UserPosts">
        <div className="flex-space-between">
          <h2>Bài viết đã đăng</h2>
          <div className="post-manage center">
            <button className='post-manage-btn' onClick={() => setDisplay(true)}>
              <i className="bi bi-gear"></i> Quản lí bài viết
            </button>
          </div>
        </div>
        <PostDetail />
      </div>
      {display && <PostManageModal setDisplay={setDisplay} />}
    </>
  );
};

export default UserPosts;
