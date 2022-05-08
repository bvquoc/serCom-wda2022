import { useContext } from 'react';
import CreatePostLayout from '../components/layout/CreatePostLayout';
import Footer from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';
import NavigationLoggiedIn from '../components/layout/NavigationLoggedIn';
import TopDonators from '../components/layout/TopDonators';
import WelcomePage from '../components/layout/WelcomePage';
import MetaData from '../components/meta/MetaData';
import AllPosts from '../components/post/AllPosts';
import { AuthContext } from '../contexts/AuthContext';

export default function Home() {
  const { loggedUser } = useContext(AuthContext);
  console.log(loggedUser);
  return (
    <>
      <MetaData title="serCom - Dịch vụ vì cộng đồng" description="serCom - Dịch vụ vì cộng đồng" />
      {loggedUser ? <NavigationLoggiedIn /> : <Navigation />}
      {loggedUser ? (
        <>
          <main>
            <div>
              <CreatePostLayout />
              <AllPosts />
            </div>
            <TopDonators />
          </main>
        </>
      ) : (
        <WelcomePage />
      )}
      <Footer />
    </>
  );
}
