import CreatePostLayout from '../components/layout/CreatePostLayout';
import { Footer } from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';
import NavigationLoggiedIn from '../components/layout/NavigationLoggedIn';
import TopDonators from '../components/layout/TopDonators';
import AllPosts from '../components/post/AllPosts';
import WelcomePage from '../components/layout/WelcomePage';
import MetaData from '../components/meta/MetaData';

export default function Home() {
  const isLoggedIn = false;
  return (
    <>
      <MetaData title="serCom - Dịch vụ vì cộng đồng" description="serCom - Dịch vụ vì cộng đồng" />
      <Navigation />
      {isLoggedIn ? (
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
