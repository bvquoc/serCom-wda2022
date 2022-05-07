import { onAuthStateChanged } from 'firebase/auth';
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
import { auth } from '../libs/firebase';

export default function Home() {
  const {loggedUser, setLoggedUser} = useContext(AuthContext);
  onAuthStateChanged(auth, (user) => {
    setLoggedUser(user);
  });
  console.log(loggedUser);
  return (
    <>
      <MetaData title="serCom - Dịch vụ vì cộng đồng" description="serCom - Dịch vụ vì cộng đồng" />
      {loggedUser ? <NavigationLoggiedIn /> : <Navigation />}
      {loggedUser ? (
        <>
          <div style={{ width: '70%' }}>
            <CreatePostLayout />
          </div>
          <main>
            <AllPosts />
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
