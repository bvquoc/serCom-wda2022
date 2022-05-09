import Footer from '../../components/layout/Footer';
import Navigation from '../../components/layout/Navigation';
import MetaData from '../../components/meta/MetaData';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import NavigationLoggedIn from '../../components/layout/NavigationLoggedIn';

const FAQ = () => {
  const { loggedUser } = useContext(AuthContext);

  return (
    <>
      <MetaData title="Các câu hỏi thường gặp" description="Các câu hỏi thường gặp" />
      {loggedUser ? <NavigationLoggedIn /> : <Navigation />}
      <div className="FAQ">
        <h1>Các câu hỏi thường gặp</h1>
        <p>Hiện tại chưa có câu hỏi nào</p>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
