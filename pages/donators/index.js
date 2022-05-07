import NavigationLoggiedIn from '../../components/layout/NavigationLoggedIn';
import MetaData from '../../components/meta/MetaData';

const Donators = () => {
  return (
    <>
      <MetaData title="Người ủng hộ" description="Danh sách người ủng hộ" />
      <NavigationLoggiedIn />
      <div className="Donators">
        <h1>Danh sách Người ủng hộ</h1>
        <p>Hiện tại chưa có Người ủng hộ nào</p>
      </div>
    </>
  );
};

export default Donators;
