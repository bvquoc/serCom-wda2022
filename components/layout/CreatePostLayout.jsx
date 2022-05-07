import Image from 'next/image';
import {useState} from "react";
import { CreatePost } from '../post/CreatePost';

const CreatePostLayout = () => {

    const [display, setDisplay] = useState(false);
    return (
    <>
      <div className="CreatePostLayout">
        <div className="flex-default">
          <div className="center">
            <div className="create-post-img">
              <Image src="/icon-512x512.png" alt="Avatar" width={512} height={512} objectFit="contain" priority />
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
