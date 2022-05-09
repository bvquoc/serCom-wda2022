

const ImagePopUp = ({ setDisplay, imgURL }) => {
  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <img src={imgURL} alt="Pop up Image" style={{width: "100%"}} />
        </div>
      </div>
    </>
  );
};

export default ImagePopUp;
