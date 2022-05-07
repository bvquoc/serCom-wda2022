import Footer from '../../components/layout/Footer';
import Navigation from '../../components/layout/Navigation';
import MetaData from '../../components/meta/MetaData';

const FAQ = () => {
  return (
    <>
    <MetaData title="Các câu hỏi thường gặp" description="Các câu hỏi thường gặp" />
      <Navigation />
      <div className='FAQ'>
        <h1>Các câu hỏi thường gặp</h1>
        <p>Hiện tại chưa có câu hỏi nào</p>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
