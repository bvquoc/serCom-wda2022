import { useState } from 'react';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import swal from 'sweetalert';
import { onInputChange } from '../../libs';
import { getUser } from '../../service';
import Loading from '../onLoad/Loading';

const UpdateUserInformation = ({ setDisplay }) => {
  const [fetchData, setFetchData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (router.isReady) {
        getUser(router.query.id).then((data) => setFetchData(data[0]));
      }
    }
    return () => (mounted = false);
  }, [router.isReady]);

  const [formData, setFormData] = useState({
    fullName: fetchData?.fullname,
    email: fetchData?.email,
    telephone: fetchData?.telephone,
    address: fetchData?.address,
  });

  const handleSubmit = () => {
    const { fullName, email, telephone, address } = formData;
    if (!fullName || !email || !telephone || !address) {
      return swal('', 'Vui lòng điền đầy đủ thông tin', 'warning');
    }
    console.log(formData);
  };

  if (!fetchData) return <Loading />;

  return (
    <>
      <div className="wide-screen">
        <i className="bi bi-x-lg" onClick={() => setDisplay(false)}></i>
        <div className="center" style={{ minHeight: '100vh' }}>
          <div className="UpdateUserInformation">
            <h2>Cập nhật thông tin cá nhân</h2>
            <input
              type="text"
              name="fullName"
              placeholder={fetchData.fullname}
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <input
              type="email"
              name="email"
              placeholder={fetchData.email}
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <input
              type="tel"
              name="telephone"
              placeholder={fetchData.telephone}
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />

            <input
              type="text"
              name="address"
              placeholder={fetchData.address}
              onChange={(e) => onInputChange(e, formData, setFormData)}
            />
            <div className="reverse-flex-default">
              <button
                className="cancel-btn"
                style={{ backgroundColor: 'red', color: 'white' }}
                onClick={() => setDisplay(false)}
              >
                Hủy bỏ
              </button>
              <button className="update-btn" onClick={handleSubmit}>
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUserInformation;
