import { toDot } from "../../../libs";

const MoneyReceived = ({money}) => {
  return (
    <div className="MoneyDonated MoneyReceived">
      <h3>Số tiền đã nhận được</h3>
      <div className="money">{toDot(money)} VNĐ</div>
    </div>
  );
};

export default MoneyReceived;
