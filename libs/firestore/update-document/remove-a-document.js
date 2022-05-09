import { doc, deleteDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
/**
 * Remove a document to collection (req collectionName, docId)
 * @param {String} collectionName (ex: "users")
 * @param {String} docId (ex: "12345" -> "users/12345")
 */
const removeDocument = async (collectionName, docId) => {
  const _doc = doc(firestore, `${collectionName}/${docId}`);
  try {
    await deleteDoc(_doc);
    console.log('Data removed successfully');
  } catch (error) {
    console.log('An error occurred while removing');
  }
};

export { removeDocument };
