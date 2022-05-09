import Image from 'next/image';
import { useState } from "react";
import { CreatePost } from '../post/CreatePost';

const CreatePostLayout = () => {


    const [display, setDisplay] = useState(false);
    return (
    <>
      <div className="CreatePostLayout">
        <div className="flex-default">
          <div className="center">
            <div className="create-post-img">
              <img src= {""} alt="Avatar"/>
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
