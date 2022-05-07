import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import CreatePostLayout from '../../components/layout/CreatePostLayout';
import Footer from '../../components/layout/Footer';
import SingleLogo from '../../components/layout/SingleLogo';
import MetaData from '../../components/meta/MetaData';
import PersonalInformation from '../../components/user/personal/PersonalInformation';
import RolesPage from '../../components/user/RolesPage';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = () => {
  const { loggedUser } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    
  }, [router.isReady]);
 const role = router.query.role;

  return (
    <>
      <MetaData title="Trang cá nhân - " description="Trang cá nhân" />
      <SingleLogo />

      <div className="Profile">
        <div className="grid-4-6">
          <PersonalInformation />
          <div>
            <CreatePostLayout />
            {loggedUser && <RolesPage role={role} />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
