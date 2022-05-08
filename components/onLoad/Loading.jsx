import MetaData from '../meta/MetaData';

const Loading = () => {
  return (
    <>
      <MetaData title="Đang tải..." />
      <div className="wide-screen">
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="flex-space-around" style={{ gap: '2rem' }}>
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
