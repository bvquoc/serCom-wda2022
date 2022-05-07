import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NavigationLoggiedIn from '../../components/layout/NavigationLoggedIn';
import MetaData from '../../components/meta/MetaData';
import PNSPage from '../../components/user/PNSPage';

const Profile = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.id);
    }
  }, [router.isReady]);
  console.log(router);
  return (
    <>
      <MetaData title="Trang cá nhân - " description="Trang cá nhân" />
      <NavigationLoggiedIn />
      <PNSPage />
    </>
  );
};

export default Profile;
