import { useState } from 'react';
import Link from 'next/link';
import Privacy from '../docs/Privacy';
import Terms from '../docs/Terms';

const Footer = () => {
  const [displayPrivacy, setDisplayPrivacy] = useState(false);
  const [displayTerms, setDisplayTerms] = useState(false);
  return (
    <>
      <div className="Footer">
        <div style={{height: "200px"}}></div>
        <div className='flex-space-between'>
          <div className="left">
            <div className="footer-item center">
              <Link href="/about" passHref>
                <a>Về chúng tôi</a>
              </Link>
            </div>
            <div className="footer-item center">
              <Link href="/help" passHref>
                <a>Trung tâm trợ giúp</a>
              </Link>
            </div>
            <div className="footer-item center">
              <div style={{ cursor: 'pointer' }} onClick={() => setDisplayPrivacy(true)}>
                Quyền riêng tư
              </div>
            </div>
            <div className="footer-item center">
              <div style={{ cursor: 'pointer' }} onClick={() => setDisplayTerms(true)}>
                Điều khoản
              </div>
            </div>
          </div>
          <div className="right">
            <div className="copyright center">
              <span>© serCom 2022</span>
            </div>
            <div className="social-network">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Privacy display={displayPrivacy} setDisplay={setDisplayPrivacy} />
      <Terms display={displayTerms} setDisplay={setDisplayTerms} />
    </>
  );
};

export default Footer;
