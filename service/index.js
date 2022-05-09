import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import { firestore } from '../libs/firebase';

export const getUser = async (id) => {
  const usersCollection = collection(firestore, 'users');
  console.log('Router: ', id);
  const usersQuery = query(usersCollection, where('id', '==', id || ''), limit(1));
  const result = [];
  await getDocs(usersQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), _docId: doc.id });
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
    });
  });
  console.log('res:', result);
  return result;
};

export const getAllPosts = async () => {
  const postsCollection = collection(firestore, 'posts');
  const postsQuery = query(postsCollection);
  const result = [];
  await getDocs(postsQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), _docId: doc.id });
    });
  });
  console.log('posts:', result);
  return result;
};

export const getUserPosts = async (postsId) => {
  const result = [];
  const postsCollection = collection(firestore, 'posts');
  const postsQuery = query(postsCollection, where('id', '==', postsId || ''),limit(1));
  await getDocs(postsQuery).then((snapshot) => {
    snapshot.docs.forEach((doc) => {
      result.push({ ...doc.data(), _docId: doc.id });
    });
  });
  console.log('user post:', result);
  return result[0];
};
