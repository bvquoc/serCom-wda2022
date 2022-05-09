import { doc, setDoc } from 'firebase/firestore';
import { firestore } from './firebase';

/**
 *
 * @param {String} collectionName (ex: "users")
 * @param {String} docId (ex: "12345" -> "users/12345")
 * @param {Object} data (ex: { name: "Bob", age: 25 })
 */
const addDocument = async (collectionName, docId, data) => {
  const tmp = doc(firestore, `${collectionName}/${docId}`);
  try {
    await setDoc(tmp, data);
    console.log('Data added successfully');
  } catch (error) {
    console.log('An error occurred while adding');
  }
};

export { addDocument };
