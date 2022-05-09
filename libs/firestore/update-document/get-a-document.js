import { doc, getDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';

const getDocument = async (collectionName, docId) => {
  const docRef = doc(firestore, collectionName, docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    console.log('No such document!');
  }
};

export { getDocument };
