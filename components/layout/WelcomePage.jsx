import Link from 'next/link';
import Image from 'next/image';

const WelcomePage = () => {
  return (
    <div className="WelcomePage">
      <div className="welcome-title">Mỗi hành động từ thiện đều là một bậc thang dẫn tới thiên đường.</div>
      <div className="author">Henry Ward Beecher</div>
      <h3>Trở thành người dùng của serCom ngay!</h3>
      <div className="center">
        <Link href="/register">
          <button className="start-btn">Bắt đầu ngay</button>
        </Link>
      </div>
      <p style={{ textAlign: 'center' }}>Hoàn toàn miễn phí, và chưa tốn đến một phút của bạn.</p>
      <div className="grid-3-7 r-rg" style={{ marginTop: '4rem' }}>
        <div className="welcomepage_img center">
          <Image
            src="/Register.jpg"
            width={512}
            height={512}
            alt="register"
            objectFit="contain"
            priority
            quality={100}
          />
        </div>
        <div className="welcomepage_desc center">
          <div>
            <div className="reverse-flex-default">
              <h1>Chỉ một vài bước đơn giản</h1>
            </div>
            <div className="reverse-flex-default">
              <h2>Bạn đã có thể trở thành người dùng của serCom</h2>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>❤️🕊️❤️</h1>
      <div style={{ marginTop: '4rem', display: 'grid' }}>
        <div className="welcomepage_desc center">
          <div>
            <div className="reverse-flex-default">
              <h2>Bình chọn và ủng hộ... </h2>
            </div>
          </div>
        </div>
        <div className="welcomepage_img center">
          <Image src="/Post.jpg" width={512} height={512} alt="post" objectFit="contain" priority quality={100} />
        </div>
      </div>
      <h1 style={{ textAlign: 'center' }}>❤️🕊️❤️</h1>
      <div className="grid-6-4 r-rg" style={{ marginTop: '4rem' }}>
        <div className="welcomepage_desc center">
          <div>
            <div className="reverse-flex-default">
              <h2>Để được trải nghiệm nhiều hơn... </h2>
            </div>
            <div className="reverse-flex-default">
              <Link href="/login" passHref>
                <a>
                  <h1>Đăng nhập ngay</h1>
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="welcomepage_img center">
          <Image src="/Login.jpg" width={512} height={512} alt="login" objectFit="contain" priority quality={100} />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
