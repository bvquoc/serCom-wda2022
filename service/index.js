import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../libs/firebase';

export const getUser = async (id) => {
  const usersCollection = collection(firestore, 'users');
  console.log('Router: ', id);
  const usersQuery = query(usersCollection, where('id', '==', id || ''), limit(1));
  const result = [];
  await getDocs(usersQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), email: doc.id });
    });
  });
  console.log('res:', result);
  return result;
};

export const getAllUsers = async () => {
  const usersCollection = collection(firestore, 'users');
  const usersQuery = query(usersCollection);
  const result = [];
  await getDocs(usersQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), _docId: doc.id });
    })
  })
  console.log('res:', result);
  return result;
}