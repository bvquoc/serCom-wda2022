import { useEffect, useState } from 'react';
import { getAllPosts } from '../../service';
import Loading from '../onLoad/Loading';
import PostDetail from './PostDetail';

const UserPost = ({ postId }) => {
  const [userPost, setUserPost] = useState(null);

  useEffect(() => {
    getAllPosts().then((res) => setUserPost(res.filter((post) => post.id === postId)[0] || []));
  }, []);
  console.log(userPost);
  if (!userPost) return <Loading />;
  return <>{userPost.length !== 0 ? <PostDetail {...userPost} /> : <h3>Không có bài viết nào</h3>}</>;
};

export default UserPost;
