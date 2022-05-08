import Link from 'next/link';

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
    </div>
  );
};

export default WelcomePage;
