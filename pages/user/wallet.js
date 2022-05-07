import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SingleLogo from '../../components/layout/SingleLogo';
import MetaData from '../../components/meta/MetaData';
import Loading from '../../components/onLoad/Loading';
import MoneyDeposit from '../../components/user/wallet/MoneyDeposit';
import MoneyDonated from '../../components/user/wallet/MoneyDonated';
import MoneyInWallet from '../../components/user/wallet/MoneyInWallet';
import MoneyReceived from '../../components/user/wallet/MoneyReceived';
import WithDrawMoney from '../../components/user/wallet/WithDrawMoney';

const Wallet = () => {
  const [id, setId] = useState(null);
  const [role, setRole] = useState(null);
  const [display, setDisplay] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (router.isReady) {
      setRole(router.query.role);
      setId(router.query.id);
    }
  }, [router.isReady]);
  console.log(role);
  return (
    <>
      <MetaData title="Ví của tôi - " description="Ví của tôi" />
      <SingleLogo />
      <div className="flex-space-between">
        <h1>
          <i className="bi bi-wallet2" style={{ fontSize: '34px' }}></i> Ví của tôi
        </h1>
        <div className="flex-default">
          <div className="center">
            <i className="bi bi-cash-coin" title="Rút tiền" onClick={() => setDisplay(true)}></i>
          </div>
          {role === 'pns' ? (
            <div className="center">
              <i className="bi bi-info-circle" title="Thông tin người ủng hộ"></i>
            </div>
          ) : (
            <div className="center">
              <button className="deposit-btn" onClick={() => setDeposit(true)}>
                Nạp tiền
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="grid-container">
        <MoneyInWallet />
        {role === null ? <Loading /> : role === 'pns' ? <MoneyReceived /> : <MoneyDonated />}
        <WithDrawMoney display={display} setDisplay={setDisplay} />
        <MoneyDeposit display={deposit} setDisplay={setDeposit} />
      </div>
    </>
  );
};

export default Wallet;
