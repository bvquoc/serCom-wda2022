import PostDetail from './PostDetail';

const AllPosts = ({ posts }) => {
  return (
    <>
      <div className="AllPosts">
        <div className="post-container">
          {posts.map((post) => (
            <PostDetail key={post._docId} {...post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllPosts;
