import { initializeApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBpCAnxOHCwvQcMdbnWZTMlG3ZEoe7QpWs',
  authDomain: 'wda-sercom.firebaseapp.com',
  projectId: 'wda-sercom',
  storageBucket: 'wda-sercom.appspot.com',
  messagingSenderId: '1064107709443',
  appId: '1:1064107709443:web:52aa7fdf86155ba6d86a36',
  measurementId: 'G-PNZCX62NRC',
};

const firebase = initializeApp(firebaseConfig);
export default firebase;

export const auth = getAuth(firebase);
export const storage = getStorage(firebase);
