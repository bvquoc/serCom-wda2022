import React from 'react';
import PostDetail from './PostDetail';

const AllPosts = () => {
  return (
    <>
    <div className='AllPosts'>

      <h2>Tất cả bài viết</h2>
      <div className="post-container">
        <PostDetail />
        
      </div>
    </div>
    </>
  );
};

export default AllPosts;
