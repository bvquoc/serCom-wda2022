import SingleLogo from '../../components/layout/SingleLogo';
import MetaData from '../../components/meta/MetaData';

const About = () => {
  return (
    <>
      <MetaData title="Về chúng tôi" />
      <SingleLogo />
      <div className="About">
        <h1>Về chúng tôi</h1>
        <article>
          <p>
            <span style={{fontSize: "40px", fontWeight:700}}>V</span>ào thời điểm ý tưởng về một nền tảng giúp đỡ cộng đồng được nêu ra, dịch Covid đã và đang diễn ra hoành
            hành trong suốt 3 năm kể từ 2019, để lại nhiều hậu quả nặng nề mà người dân ở khắp đất nước phải gánh chịu.
          </p>
          <p>
            Chúng tôi – MERN – tạo ra <b>serCom</b> với khao khát đem lợi ích tới cho cộng đồng, giúp đỡ mọi người để cùng tạo
            nên một xã hội nơi không ai phải tụt lại phía sau.
          </p>
          <p>
            <b>serCom</b> là một nền tảng kết nối các mạnh thường quân với các cá nhân và tổ chức từ thiện, sẽ mang lại sự tiện
            lợi và giúp quá trình quyên góp, ủng hộ các cá nhân và tổ chức từ thiện diễn ra một cách nhanh chóng nhất mà
            không cần thông qua bất cứ trung gian nào khác. Những mạnh thường quân có thể đóng góp những ủng hộ của họ
            tới những cá thể thực sự cần nó một cách ý nghĩa và tiện lợi nhất mà không sợ bất cứ vấn đề gì phát sinh.
          </p>
          <p>Gửi lời chúc tới tất cả con người Việt Nam đang ngày đêm cố gắng xây dựng đất nước.</p>
          <p>Trân trọng.</p>
        </article>
        <div className='mern-sign'>The MERN team</div>
      </div>
    </>
  );
};

export default About;
