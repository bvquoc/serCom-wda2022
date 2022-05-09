import Image from 'next/image';

const TopDonators = () => {
  return (
    <>
      <div className="TopDonators">
        <div className="top-donators">
          <h2>
            <i className="bi bi-stars"></i> Người ủng hộ nổi bật
          </h2>
          {/* {<div className="top-donators-grid">
            <div className="top-donators-img">
              <Image src="/icon-512x512.png" alt="Avatar" width={512} height={512} objectFit="contain" priority />
            </div>
            <div className="top-donators-name">Full Name</div>
          </div>} */}
        </div>
      </div>
    </>
  );
};

export default TopDonators;
