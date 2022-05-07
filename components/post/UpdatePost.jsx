import { useState } from 'react';
import Image from 'next/image';
import swal from 'sweetalert';
const UpdatePost = ({ setDisplay }) => {
  // check if target ref is checked, the target will be displayed
  // if not, nothing will be displayed
  const [target, setTarget] = useState(false);

  const handleSubmit = () => {
    swal('Chỉnh sửa bài viết thành công','','success');
    setDisplay(false);
  }

  return (
    <>
      <div className="wide-screen">
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="UpdatePost">
            <h2>Chỉnh sửa bài viết</h2>
            <hr />
            <input type="text" name="title" placeholder="Tiêu đề bài viết" />
            <textarea aria-label="post-content" placeholder="Nhập nội dung bài viết..." />
            <label htmlFor="target" className="flex-space-between">
              <span className="center">Cột mốc</span>
              <i className={`bi bi-toggle-${!target ? 'off' : 'on'}`}></i>
            </label>
            <input type="checkbox" onChange={(e) => setTarget(e.target.checked)} name="target" id="target" />
            {target && (
              <>
                <input type="number" name="targetAmout" placeholder="Số tiền mốc" min="1000" max="10000000000" />
                <div className="flex-space-between">
                  <div>
                    <span>Bắt đầu từ</span>
                    <input type="date" name="startDate" />
                  </div>
                  <div>
                    <span>Đến</span>
                    <input type="date" name="startDate" />
                  </div>
                </div>
              </>
            )}
            {/* must check if image exist, if not, don't display the image */}
            <div className="post-detailt-content-img center">
              <Image src="/icon-512x512.png" alt="Post image" width={512} height={512} objectFit="contain" />
            </div>
            <label htmlFor="post-image" className="flex-space-between">
              <span className="center">
                <b>Tải ảnh lên</b>
              </span>
              <div className="flex-default center">
                <input type="file" name="post-image" id="post-image" />
                <div>
                  <i className="bi bi-upload"></i>
                </div>
              </div>
            </label>
            <div className="reverse-flex-default">
              <button className="edit-confirm-btn" onClick={handleSubmit}>Chỉnh sửa bài viết</button>
              <button className="delete-confirm-btn" style={{margin: "2rem 1rem 0 0"}} onClick={() => setDisplay(false)}>Hủy bỏ</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdatePost;
