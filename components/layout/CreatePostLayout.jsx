import { useState, useContext } from "react";
import { CreatePost } from '../post/CreatePost';
import { AuthContext } from '../../contexts/AuthContext';

const CreatePostLayout = () => {

  const {currentUserData} = useContext(AuthContext);

    const [display, setDisplay] = useState(false);
    return (
    <>
      <div className="CreatePostLayout">
        <div className="flex-default">
          <div className="center">
            <div className="create-post-img">
              <img src= {currentUserData.avatar.url || "/defaultAvatar.jpg"} alt="Avatar"/>
            </div>
          </div>
          <input onClick={() => setDisplay(true)} type="text" name="postCreate" placeholder="Kêu gọi hỗ trợ..." readOnly />
        </div>
      </div>
      {display && <CreatePost display={display} setDisplay={setDisplay} />}
    </>
  );
};

export default CreatePostLayout;
