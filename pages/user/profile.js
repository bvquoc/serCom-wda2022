import {useRouter} from "next/router";
import {useEffect} from 'react';

import NavigationLoggiedIn from '../../components/layout/NavigationLoggedIn';
import PNSPage from '../../components/user/PNSPage';

const Profile = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.id);
    }
  }, [router.isReady]);
  return (
    <>
      <NavigationLoggiedIn />
      <PNSPage />
    </>
  );
};

export default Profile;
