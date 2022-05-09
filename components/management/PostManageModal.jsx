import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { getAllPosts } from '../../service';
import Loading from '../onLoad/Loading';
import ShortenedPost from '../post/ShortenedPost';

const PostManageModal = ({ setDisplay }) => {
  const [posts, setPosts] = useState(null);
  const { currentUserData } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      getAllPosts().then((res) => setPosts(res));
    }
  }, [router.isReady]);

  if (!posts) return <Loading />;

  if(!currentUserData) return <Loading />;

  console.log(posts, currentUserData);
  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="PostManageModal">
            <h2 style={{ borderBottom: '1px solid black' }}>Quản lí bài viết</h2>
            {currentUserData.isPns.posts.map((postId) => (
              <ShortenedPost key={postId} post={posts.filter((item) => item.id === postId)} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PostManageModal;
