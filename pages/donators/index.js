import { useEffect, useState } from 'react';
import DonatorList from '../../components/layout/DonatorList';
import Footer from '../../components/layout/Footer';
import Navigation from '../../components/layout/Navigation';
import MetaData from '../../components/meta/MetaData';
import { getAllUsers } from '../../service';
import Loading from '../../components/onLoad/Loading';

const Donators = () => {
  const [allUsers, setAllUsers] = useState(null);
  const [searchValue, setSearchValue] = useState('');
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      getAllUsers().then((data) => setAllUsers(data));
    }
    return () => (mounted = false);
  }, []);
  console.log(allUsers);
  if (!allUsers) return <Loading />;
  return (
    <>
      <MetaData title="Người ủng hộ" description="Danh sách người ủng hộ" />
      <Navigation />
      <div className="Donators">
        <h1>Danh sách Người ủng hộ</h1>
        <div className="flex-space-between">
          <div className="center">
            <i className="bi bi-gift" style={{ fontSize: '2rem', marginRight: '1rem' }}></i>
          </div>
          <div className="flex-default">
            <input type="text" placeholder="Tìm kiếm" onChange={(e) => setSearchValue(e.target.value)} />
            <div className="center" style={{ marginLeft: '1rem' }}>
              <i className="bi bi-search"></i>
            </div>
            {/* <div className='center'>
              <i className="bi bi-filter"></i>
            </div> */}
          </div>
        </div>
        <DonatorList allUsers={allUsers.filter((item) => item.fullname.includes(searchValue))} />
        {/* <p>Hiện tại chưa có Người ủng hộ nào</p> */}
      </div>
      <Footer />
    </>
  );
};

export default Donators;
