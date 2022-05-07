import Footer from '../../components/layout/Footer';
import Navigation from '../../components/layout/Navigation';
import MetaData from '../../components/meta/MetaData';

const Donators = () => {
  return (
    <>
      <MetaData title="Người ủng hộ" description="Danh sách người ủng hộ" />
      <Navigation />
      <div className="Donators">
        <h1>Danh sách Người ủng hộ</h1>
        <p>Hiện tại chưa có Người ủng hộ nào</p>
      </div>
      <Footer />
    </>
  );
};

export default Donators;
