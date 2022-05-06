import Link from 'next/link';

export const Footer = () => {
  return (
    <>
      <div className="Footer">
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
            <Link href="/privacy" passHref>
              <a>Quyền riêng tư</a>
            </Link>
          </div>
          <div className="footer-item center">
            <Link href="/terms" passHref>
              <a>Điều khoản</a>
            </Link>
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
    </>
  );
};
