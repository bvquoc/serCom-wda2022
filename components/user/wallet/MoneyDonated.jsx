import { toDot } from '../../../libs'

const MoneyDonated = ({money}) => {
  return (
    <div className="MoneyDonated MoneyReceived">
      <h3>Số tiền đã ủng hộ</h3>
      <div className="money">{toDot(money)} VNĐ</div>
    </div>
  )
}

export default MoneyDonated