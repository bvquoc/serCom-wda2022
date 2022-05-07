import { useState } from 'react';

export const CreatePost = ({ setDisplay }) => {
  const [target, setTarget] = useState(false);
  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="CreatePost">
            <h1>Tạo bài viết</h1>
            <input type="text" name="title" placeholder="Tiêu đề bài viết" />
            <textarea aria-label="post-content" placeholder="Nhập nội dung bài viết..." />
            <label htmlFor="target" className="flex-space-between">
              <span className="center">Tạo cột mốc</span>
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
            <label htmlFor="post-image" className="flex-space-between">
              <span className='center'><b>Tải ảnh lên</b></span>
              <div className='flex-default center'>
                <input type="file" name="post-image" id="post-image" />
                <div>
                  <i className="bi bi-upload"></i>
                </div>
              </div>
            </label>
            <div className="reverse-flex-default">
              <button className="btn-create-post">Tạo bài viết</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
