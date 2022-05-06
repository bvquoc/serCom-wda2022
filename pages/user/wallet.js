import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SingleLogo from '../../components/layout/SingleLogo';
import MoneyDonated from '../../components/user/wallet/MoneyDonated';
import MoneyInWallet from '../../components/user/wallet/MoneyInWallet';
import MoneyReceived from '../../components/user/wallet/MoneyReceived';
import Loading from '../../components/onLoad/Loading';

const wallet = () => {
  const [id, setId] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setRole(router.query.role);
      setId(router.query.id);
    }
  }, [router.isReady]);
  console.log(router);
  console.log(role);
  return (
    <>
      <SingleLogo />
      <div className='flex-space-between'>

      <h1>
        <i className="bi bi-wallet2" style={{ fontSize: '34px' }}></i> Ví của tôi
      </h1>
      <div className='flex-default'>
          <i className="bi bi-cash-coin"></i>
          <i className="bi bi-info-circle"></i>
      </div>
      </div>
      <div className="grid-container">
        <MoneyInWallet />
        {role === null ? <Loading /> : role === 'pns' ? <MoneyReceived /> : <MoneyDonated />}
      </div>
    </>
  );
};

export default wallet;
