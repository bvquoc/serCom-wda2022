import React from 'react';
import swal from 'sweetalert';

const DeletePost = ({ setDisplay }) => {
  const handleDelete = () => {
    swal('Xóa thành công!', '', 'success');
    setDisplay(false);
  };

  return (
    <>
      <div className="wide-screen">
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="DeletePost">
            <h2>Xóa bài viết</h2>
            <hr />
            <p>Bạn có chắc chắn muốn xóa bài viết này chứ?</p>
            <div className="reverse-flex-default">
              <button className="delete-confirm-btn" onClick={handleDelete}>
                Xóa
              </button>
              <button className="cancel-btn" onClick={() => setDisplay(false)}>
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletePost;