import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { CreatePostLayout, Navigation, NavigationLoggedIn, ScrollToTop, TopDonators, WelcomePage } from '../components/layout';
import Footer from '../components/layout/Footer';
import MetaData from '../components/meta/MetaData';
import Loading from '../components/onLoad/Loading';
import AllPosts from '../components/post/AllPosts';
import { AuthContext } from '../contexts/AuthContext';
import { getAllPosts } from '../service';

export default function Home() {
  const { loggedUser } = useContext(AuthContext);

  const [posts, setPosts] = useState(null);

  const router = useRouter();
  useEffect(() => {
    let mounted = true;
    if (mounted)
      if (router.isReady) {
        getAllPosts().then((res) => setPosts(res.reverse()));
      }

    return () => {
      mounted = false;
    };
  }, [router.isReady]);

  if (!posts) return <Loading />;

  console.log(loggedUser);

  return (
    <>
      <MetaData title="serCom - Dịch vụ vì cộng đồng" description="serCom - Dịch vụ vì cộng đồng" />
      {loggedUser ? <NavigationLoggedIn /> : <Navigation />}
      {loggedUser ? (
        <>
          <main>
            <div>
              <CreatePostLayout />
              <AllPosts posts={posts} />
            </div>
            <TopDonators />
          </main>
        </>
      ) : (
        <WelcomePage />
      )}
      <Footer />
      <ScrollToTop />
    </>
  );
}
