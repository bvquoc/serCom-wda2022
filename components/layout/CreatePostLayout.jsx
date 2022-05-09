import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../onLoad/Loading';
import { CreatePost } from '../post/CreatePost';

const CreatePostLayout = () => {
  const { currentUserData } = useContext(AuthContext);
  console.log(currentUserData);
  const [display, setDisplay] = useState(false);
  if(!currentUserData) return <Loading />
  return (
    <>
      <div className="CreatePostLayout">
        <div className="flex-default">
          <div className="center">
            <div className="create-post-img">
              <img src={currentUserData.avatar.url || '/defaultAvatar.jpg'} alt="Avatar" />
            </div>
          </div>
          <input
            onClick={() => setDisplay(true)}
            type="text"
            name="postCreate"
            placeholder="Kêu gọi hỗ trợ..."
            readOnly
          />
        </div>
      </div>
      {display && <CreatePost display={display} setDisplay={setDisplay} />}
    </>
  );
};

export default CreatePostLayout;
