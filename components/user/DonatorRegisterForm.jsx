import { useState } from 'react';
import { onInputChange } from '../../libs';
import swal from 'sweetalert';

const DonatorRegisterForm = ({ display }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    telephone: '',
    email: '',
    address: '',
    job: '',
    bankName: '',
    accountNumber: '',
    accountName: '',
    branch: '',
    date: '',
  });
  const [anonymous, setAnonymous] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullName, telephone, email, address, job, bankName, accountNumber, accountName, branch, date } = formData;
    if (
      !fullName ||
      !telephone ||
      !email ||
      !address ||
      !job ||
      !bankName ||
      !accountNumber ||
      !accountName ||
      !branch ||
      !date
    ) {
      swal('Vui lòng nhập đầy đủ thông tin!', '', 'warning');
      return;
    }
    console.log(formData);
    swal('Đăng kí thành công!', '', 'success');
  };
  console.log(anonymous);
  return (
    <>
      <div className="confirm" style={{ display: display ? 'block' : 'none' }}>
        <h3>Thông tin cá nhân</h3>
        <input
          type="text"
          name="fullName"
          placeholder="Họ và tên"
          defaultValue="Tran Tuan Kiet"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="tel"
          name="telephone"
          placeholder="Số điện thoại"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          defaultValue="Email"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="text"
          name="address"
          placeholder="Địa chỉ"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="text"
          name="job"
          placeholder="Công việc hiện tại"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <label htmlFor="anonymous" className='flex-space-between'>
          <span className='center'>Ẩn danh tính</span>
          <i className={`bi bi-toggle-${!anonymous ? "off" : "on"}`}></i>
        </label>
        <input type="checkbox" onChange={(e) => setAnonymous(e.target.checked)} name="anonymous" id="anonymous"/>

        <h3>Thông tin thanh toán</h3>
        <input
          type="text"
          name="bankName"
          placeholder="Tên ngân hàng"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="text"
          name="accountNumber"
          placeholder="Số tài khoản"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="text"
          name="accountName"
          placeholder="Chủ tài khoản"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <input
          type="text"
          name="branch"
          placeholder="Chi nhánh"
          onChange={(e) => onInputChange(e, formData, setFormData)}
        />
        <span>Ngày phát hành</span>
        <input type="date" name="date" onChange={(e) => onInputChange(e, formData, setFormData)} />
        <button className="complete-btn" onClick={handleSubmit}>
          Hoàn tất
        </button>
      </div>
    </>
  );
};

export default DonatorRegisterForm;
