import ShortenedPost from "../post/ShortenedPost";

const PostManageModal = ({ setDisplay }) => {
  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{minHeight: "100vh"}}>
          <div className="PostManageModal">
            <h2 style={{borderBottom: "1px solid black"}}>Quản lí bài viết</h2>
            <ShortenedPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostManageModal;
