import { useState } from 'react';
import { onInputChange } from '../../libs';

const DonateAction = ({setDisplay}) => {
  const minMoney = 100000;
  const maxMoney = 20000000;

  const [formData, setFormData] = useState({
    money: 0,
    paymentMethod: "on",
  });

  const handleSubmit = () => {
    const { money, paymentMethod } = formData;
    if (money < minMoney || money > maxMoney) {
      swal('Vui lòng nhập đúng số tiền theo quy định!', '', 'warning');
      return;
    }
    if (paymentMethod !== 'on') {
      swal('Vui lòng chọn phương thức thanh toán!', '', 'warning');
      return;
    }
    console.log(formData);
    swal('Ủng hộ tiền thành công!', '', 'success');
  };

  return (
    <>
      <div className="wide-screen">
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="WithDrawMoney">
            <h1>Ủng hộ</h1>
            <input
              type="number"
              name="money"
              onChange={(e) => onInputChange(e, formData, setFormData)}
              placeholder="Số tiền muốn ủng hộ"
              min={minMoney}
              max={maxMoney}
            />
            <h3>Phương thức thanh toán</h3>
            <label htmlFor="payment" className="flex-space-around">
              <div className="center">
                <i className="bi bi-bank" style={{ fontStyle: 'normal', fontWeight: 500 }}>
                  Thanh toán qua ngân hàng
                </i>
              </div>
              <input
                type="radio"
                name="paymentMethod"
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

export default DonateAction;
