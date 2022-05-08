import Image from 'next/image';
import { useState } from 'react';
import UpdateUserInformation from '../../management/UpdateUserInformation';

import { firestore } from '../../../libs/firebase';

import firebase from '../../../libs/firebase';
import { useCollection } from 'react-firebase-hooks/database';

import { collection, QueryDocumentSnapshot, DocumentData, query, where, limit, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PersonalInformation = () => {
  const router = useRouter();

  const [display, setDisplay] = useState(false);

  const usersCollection = collection(firestore, 'users');

  const [users, setUsers] = useState([]);
  const [hrefUserId, sethrefUserId] = useState(router.query.id);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    console.log('Router: ', router.query.id);
    const usersQuery = query(usersCollection, where('id', '==', hrefUserId || ''), limit(1));

    const querySnapshot = await getDocs(usersQuery);

    const result = [];
    querySnapshot.forEach((snapshot) => {
      result.push(snapshot);
    });
    console.log('res:', result);
    setUsers(result);
  };

  useEffect(() => {
    getUsers();
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <div>
        <div className="PersonalInformation">
          <div className="pi-img center">
            <Image src="/icon-512x512.png" alt="Avatar" width={512} height={512} objectFit="contain" priority />
          </div>
          {users.map((userData) => {
            // console.log(router.query.id, userData.data());
            const user = userData.data();
            return (
              <div className="pi-info" key={user.id}>
                <div className="pi-name">Họ và tên: {user.fullname}</div>
                <div className="pi-email">Email: {userData.id}</div>
                <div className="pi-phone">Số điện thoại: {user.telephone}</div>
                <div className="pi-address">Địa chỉ: {user.address}</div>
              </div>
            );
          })}
          {/* <div className="pi-info">
            <div className="pi-name">Họ và tên: </div>
            <div className="pi-email">Email:</div>
            <div className="pi-phone">Số điện thoại: </div>
            <div className="pi-address">Địa chỉ: </div>
          </div> */}
          <button style={{ marginTop: '1rem' }} onClick={() => setDisplay(true)}>
            Chỉnh sửa thông tin cá nhân
          </button>
        </div>
      </div>
      {display && <UpdateUserInformation setDisplay={setDisplay} />}
    </>
  );
};

export default PersonalInformation;
