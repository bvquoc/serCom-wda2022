import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUser } from '../../service';
import PostManageModal from '../management/PostManageModal';
import Loading from '../onLoad/Loading';
import UserPost from '../post/UserPost';

const RolesPage = ({ role }) => {
  const [display, setDisplay] = useState(false);
  const [user, setUser] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getUser(router.query.id).then((res) => setUser(res[0]));
    }
  }, [router.isReady]);

  if (!user) return <Loading />;
  // console.log(userPosts);

  return (
    <>
      <div className="UserPosts">
        <div className="flex-space-between">
          <h2>Bài viết đã {role !== 'pns' ? 'đăng' : 'ủng hộ'}</h2>
          <div className="post-manage center">
            {role !== 'pns' && (
              <button className="post-manage-btn" onClick={() => setDisplay(true)}>
                <i className="bi bi-gear"></i> Quản lí bài viết
              </button>
            )}
          </div>
        </div>
        {user.isPns.posts.map((postId) => (
          <UserPost key={postId} postId={postId} />
        ))}
      </div>
      {display && <PostManageModal setDisplay={setDisplay} />}
    </>
  );
};

export default RolesPage;
