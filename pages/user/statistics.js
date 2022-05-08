import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import SingleLogo from '../../components/layout/SingleLogo';
import MetaData from '../../components/meta/MetaData';
import Loading from '../../components/onLoad/Loading';
import { AuthContext } from '../../contexts/AuthContext';
import { getUser } from '../../service';

const UserStatistics = () => {
  const { loggedUser } = useContext(AuthContext);

  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (router.isReady) {
        getUser(router.query.id).then((user) => setUser(user[0]));
      }
    }
    return () => (mounted = false);
  }, [router.isReady]);

  if (!loggedUser) return <Loading />;

  return (
    <>
      <MetaData title={`Thống kê - ${user?.fullname}`} description="Thống kê" />
      <SingleLogo />
      <h1>Thống kê</h1>
      <h2>TÍnh năng đang được phát triển...</h2>
    </>
  );
};

export default UserStatistics;
