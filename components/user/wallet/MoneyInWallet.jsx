import React from 'react';
import { toDot } from '../../../libs';

const MoneyInWallet = ({money}) => {
  return (
    <>
      <div className="MoneyInWallet">
        <h3>Tổng số tiền hiện có</h3>
        <div className='money'>{toDot(money)} VNĐ</div>
      </div>
    </>
  );
};

export default MoneyInWallet;
