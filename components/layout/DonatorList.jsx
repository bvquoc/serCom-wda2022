import Link from 'next/link';

const DonatorList = ({ allUsers }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Họ và tên</th>
            <th>Số tiền đã ủng hộ</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.length !== 0 ? (
            allUsers.map((user, index) => (
              <Link href={{ pathname: '/user/profile', query: { id: user.id } }} key={user.id} passHref>
                <tr>
                  <td>{index + 1}</td>
                  <td>{user.fullName}</td>
                  <td>{user.totalMoney}</td>
                </tr>
              </Link>
            ))
          ) : (
            <tr>
              <td colSpan="3">Không có người ủng hộ nào</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default DonatorList;
