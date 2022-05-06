import NavigationLoggiedIn from '../../components/layout/NavigationLoggedIn';

const Donators = () => {
  return (
    <>
      <NavigationLoggiedIn />
      <div className='Donators'>
        <h1>Danh sách Người ủng hộ</h1>
        <p>Hiện tại chưa có Người ủng hộ nào</p>
      </div>
    </>
  );
};

export default Donators;
