import { useState } from 'react';
import swal from 'sweetalert';
import { onInputChange } from '../../../libs';

const WithDrawMoney = ({ display, setDisplay }) => {
  const minMoney = 100000;
  const maxMoney = 5000000;

  const [formData, setFormData] = useState({
    money: 0,
    payment_Method: 'on',
  });
  const handleSubmit = () => {
    const { money, payment_Method } = formData;
    if (money < minMoney || money > maxMoney) {
      swal('Vui lòng nhập đúng số tiền theo quy định!', '', 'warning');
      return;
    }
    if (payment_Method !== 'on') {
      swal('Vui lòng chọn phương thức thanh toán!', '', 'warning');
      return;
    }
    console.log(formData);
    swal('Rút tiền thành công!', '', 'success');
  };

  return (
    <>
      <div className="wide-screen" style={{ display: display ? 'block' : 'none' }}>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="WithDrawMoney">
            <h1>Rút tiền</h1>
            <input
              type="number"
              name="money"
              onChange={(e) => onInputChange(e, formData, setFormData)}
              placeholder="Số tiền cần rút"
              min={100000}
              max={5000000}
            />
            <h3>Phương thức thanh toán</h3>
            <label htmlFor="payment" className="flex-space-around">
              <div className="center">
                <i className="bi bi-bank" style={{ fontStyle: 'normal', fontWeight: 500 }}>
                  Rút tiền về ngân hàng
                </i>
              </div>
              <input
                type="radio"
                name="payment_Method"
                id="payment"
                defaultChecked
                onChange={(e) => onInputChange(e, formData, setFormData)}
              />
            </label>
            <button className="confirm" onClick={handleSubmit}>
              Xác nhận
            </button>
            <button className="cancel" onClick={() => setDisplay(false)}>
              Hủy bỏ
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WithDrawMoney;
