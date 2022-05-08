import { useState } from 'react';
import swal from 'sweetalert';
import { onInputChange } from '../../libs';

const UpdateUserInformation = ({ setDisplay }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    telephone: '',
    address: '',
  });

  const handleSubmit = () => {
    const { fullName, email, telephone, address } = formData;
    if (!fullName || !email || !telephone || !address) {
      return swal('', 'Vui lòng điền đầy đủ thông tin', 'warning');
    }
    console.log(formData);
  };
  console.log(formData);
  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="UpdateUserInformation">
            <h2>Cập nhật thông tin cá nhân</h2>
            <input
              type="text"
              name="fullName"
              defaultValue="Trần Tuấn Kiệt"
              placeholder="Họ và tên"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <input
              type="email"
              name="email"
              defaultValue="Email"
              placeholder="Email"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <input
              type="tel"
              name="telephone"
              defaultValue="000"
              placeholder="Số điện thoại"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <input
              type="text"
              name="address"
              defaultValue="000"
              placeholder="Địa chỉ"
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <div className="reverse-flex-default">
              <button
                className="cancel-btn"
                style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setDisplay(false)}
              >
                Hủy bỏ
              </button>
              <button className="update-btn" onClick={handleSubmit}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserInformation;
