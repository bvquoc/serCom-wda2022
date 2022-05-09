import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import CreatePostLayout from '../../components/layout/CreatePostLayout';
import Footer from '../../components/layout/Footer';
import ScrollToTop from '../../components/layout/ScrollToTop';
import SingleLogo from '../../components/layout/SingleLogo';
import MetaData from '../../components/meta/MetaData';
import PersonalInformation from '../../components/user/personal/PersonalInformation';
import RolesPage from '../../components/user/RolesPage';
import { AuthContext } from '../../contexts/AuthContext';
import { getUser } from '../../service';
import Loading from '../../components/onLoad/Loading';

const Profile = () => {
  const { loggedUser, currentUserData } = useContext(AuthContext);

  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (router.isReady) {
        getUser(router.query.id).then((user) => setUser(user[0]));
      }
    }
    return () => {
      mounted = false;
    };
  }, [router.isReady]);

  // console.log(user);
  if (!user) return <Loading />;

  return (
    <>
      <MetaData title={`Trang cá nhân - ${user?.fullName}`} description="Trang cá nhân" />
      <SingleLogo />

      <div className="Profile">
        <div className="grid-4-6">
          <PersonalInformation currentUserData={currentUserData} />
          <div>
            <CreatePostLayout />
            {loggedUser && <RolesPage currentUserData={currentUserData} role={user.isPns.auth ? 'pns' : 'donator'} />}
          </div>
        </div>
      </div>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Profile;
