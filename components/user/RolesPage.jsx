import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getUserPosts } from '../../service';
import PostManageModal from '../management/PostManageModal';
import Loading from '../onLoad/Loading';
import PostDetail from '../post/PostDetail';

const RolesPage = ({ role }) => {
  const [display, setDisplay] = useState(false);
  const [userPosts, setUserPosts] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      getUserPosts(router.query.id).then((res) => setUserPosts(res));
    }
  }, [router.isReady]);

  if (!userPosts) return <Loading />;

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
        {userPosts.map((post) => (
          <PostDetail key={post._docId} {...post} />
        ))}
      </div>
      {display && <PostManageModal setDisplay={setDisplay} />}
    </>
  );
};

export default RolesPage;
