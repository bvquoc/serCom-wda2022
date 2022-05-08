import React from 'react';
import PostDetail from './PostDetail';

const AllPosts = () => {
  return (
    <>
      <div className="AllPosts">
        <div className="post-container">
          <PostDetail hrefId = "1" />
        </div>
      </div>
    </>
  );
};

export default AllPosts;
