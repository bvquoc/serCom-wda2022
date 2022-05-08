import Image from "next/image"

const ImagePopUp = ({setDisplay, imgURL}) => {
  return (
    <>
        <div className='wide-screen'>
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
            <div className='center' style={{minHeight:"100vh"}}>
                <Image src={imgURL} alt="Pop up Image" width={512} height={512} objectFit="contain" priority />
            </div>
        </div>
    </>
  )
}

export default ImagePopUp