import { doc, getDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import swal from 'sweetalert';
import timestamp from 'time-stamp';
import uniqid from 'uniqid';
import { AuthContext } from '../../contexts/AuthContext';
import { onInputChange } from '../../libs';
import { auth, firestore } from '../../libs/firebase';
import { addDocument } from '../../libs/firestore/update-document/add-a-document';
import { updateDocument } from '../../libs/firestore/update-document/update-a-document';

export const CreatePost = ({ setDisplay }) => {
  const { currentUserData } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    value: 0,
  });

  // const [img, setImg] = useState(null);
  const updateUsersPost = async (userId, postId) => {
    const docRef = doc(firestore, 'users', userId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const role = currentUserData.isPns.auth ? 'isPns' : 'isDonator';
      const updateTerm = docSnap.data()[role];
      const posts = [...updateTerm.posts];
      posts.push(postId);
      const newIsPns = { ...updateTerm, posts };
      const updateData = {
        role: newIsPns,
      };
      updateDocument('users', userId, updateData);
    } else {
      console.log('No such document!');
    }
  };

  const handleSubmit = () => {
    const isTarget = {
      isChecked: checked,
      dateStart: formData.dateStart,
      dateEnd: formData.dateEnd,
    };
    const { title, description } = formData;
    const { isChecked, dateStart, dateEnd } = isTarget;
    if (!title) {
      return swal('Vui lòng nhập tiêu đề', '', 'warning');
    }
    if (!description) {
      return swal('Vui lòng nhập mô tả', '', 'warning');
    }
    if (isChecked) {
      if (!dateStart || !dateEnd) {
        return swal('Vui lòng nhập ngày bắt đầu/kết thúc', '', 'warning');
      }
      if (dateStart > dateEnd) {
        return swal('Ngày bắt đầu phải nhỏ hơn ngày kết thúc', '', 'warning');
      }
      if (formData.value < 0) return swal('Vui lòng nhập giá trị hợp lệ!', '', 'warning');
    }

    const postId = uniqid('post');
    const data = {
      id: postId,
      ...isTarget,
      ...formData,
      given: 0,
      createdAt: timestamp.utc('YYYY/MM/DD:mm:ss'),

      user: {
        createdBy: currentUserData.fullName,
        avatar: { url: currentUserData.avatar.url },
        id: currentUserData.id,
      },
    };

    addDocument('posts', postId, data)
      .then(() => updateUsersPost(auth.currentUser.uid, postId))
      .then(() => {
        swal('Thành công!', 'Tạo bài viết thành công.', 'success');
        setDisplay(false);
      })
      .then(() => window.location.reload());
  };

  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="CreatePost">
            <h1>Tạo bài viết</h1>
            <input
              type="text"
              name="title"
              placeholder="Tiêu đề bài viết"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <textarea
              aria-label="post-content"
              placeholder="Nhập nội dung bài viết..."
              name="description"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <label htmlFor="target" className="flex-space-between">
              <span className="center">Tạo cột mốc</span>
              <i className={`bi bi-toggle-${!checked ? 'off' : 'on'}`}></i>
            </label>
            <input type="checkbox" name="target" id="target" onChange={(e) => setChecked(e.target.checked)} />
            {checked && (
              <>
                <input
                  type="number"
                  name="value"
                  placeholder="Số tiền mốc"
                  min="1000"
                  max="10000000000"
                  onChange={(e) => onInputChange(e, formData, setFormData)}
                />
                <div className="flex-space-between r-date">
                  <div>
                    <span>Bắt đầu từ</span>
                    <input type="date" name="dateStart" onChange={(e) => onInputChange(e, formData, setFormData)} />
                  </div>
                  <div>
                    <span>Đến</span>
                    <input type="date" name="dateEnd" onChange={(e) => onInputChange(e, formData, setFormData)} />
                  </div>
                </div>
              </>
            )}
            <label htmlFor="post-image" className="flex-space-between">
              <div className="center">
                <b>Tải ảnh lên</b>
              </div>
              <div className="flex-default">
                <input
                  type="file"
                  name="post-image"
                  id="post-image"
                  // onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))}
                />
                <div className="center">
                  <i className="bi bi-upload"></i>
                </div>
              </div>
            </label>
            <div className="reverse-flex-default">
              <button className="btn-create-post" onClick={handleSubmit}>
                Tạo bài viết
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
