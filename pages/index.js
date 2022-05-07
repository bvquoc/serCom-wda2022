import CreatePostButton from '../components/layout/CreatePostButton';
import { Footer } from '../components/layout/Footer';
import Navigation from '../components/layout/Navigation';
import NavigationLoggiedIn from '../components/layout/NavigationLoggedIn';
import TopDonators from '../components/layout/TopDonators';
import AllPosts from '../components/post/AllPosts';

export default function Home() {
  
  return (
    <>
      <NavigationLoggiedIn />
      <main>
        <AllPosts />
        <TopDonators />
      </main>
      <CreatePostButton />
      <Footer />
    </>
  );
}
