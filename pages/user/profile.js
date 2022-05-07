import { useRouter } from 'next/router';
import { useEffect } from 'react';

import NavigationLoggiedIn from '../../components/layout/NavigationLoggedIn';
import MetaData from '../../components/meta/MetaData';
import RolesPage from '../../components/user/RolesPage';
import PersonalInformation from '../../components/user/personal/PersonalInformation';
import CreatePostLayout from '../../components/layout/CreatePostLayout';
import Footer from "../../components/layout/Footer"

const Profile = () => {
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      console.log(router.query.id);
    }
  }, [router.isReady]);
  console.log(router);

  const isLoggedIn = true;
  const role = router.query.role;

  return (
    <>
      <MetaData title="Trang cá nhân - " description="Trang cá nhân" />
      <NavigationLoggiedIn />

      <div className="Profile">
        <div className="grid-4-6">
          <PersonalInformation />
          <div>
            <CreatePostLayout />
            {isLoggedIn && <RolesPage role={role} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
