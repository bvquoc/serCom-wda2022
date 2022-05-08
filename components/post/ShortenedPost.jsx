import { useState } from 'react';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';

const ShortenedPost = () => {
  const [displayDelete, setDisplayDelete] = useState(false);
  const [displayUpdate, setDisplayUpdate] = useState(false);

  return (
    <>
      <div className="ShortenedPost">
        <div className="flex-space-between flex-columns pm-item">
          <div className="flex-space-between flex-columns">
            <h3>Title</h3>
            <cite>Time</cite>
          </div>
          <div className="flex-default reverse-flex-default">
            <div className="center">
              <button className="edit-btn" onClick={() => setDisplayUpdate(true)}>
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
            <div className="center">
              <button className="delete-btn" onClick={() => setDisplayDelete(true)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-space-between flex-columns pm-item">
          <div className="flex-space-between flex-columns">
            <h3>Title</h3>
            <cite>Time</cite>
          </div>
          <div className="flex-default reverse-flex-default">
            <div className="center">
              <button className="edit-btn" onClick={() => setDisplayUpdate(true)}>
                <i className="bi bi-pencil-square"></i>
              </button>
            </div>
            <div className="center">
              <button className="delete-btn" onClick={() => setDisplayDelete(true)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        </div>  
      </div>
      {displayDelete && <DeletePost setDisplay={setDisplayDelete} />}
      {displayUpdate && <UpdatePost setDisplay={setDisplayUpdate} />}
    </>
  );
};

export default ShortenedPost;
