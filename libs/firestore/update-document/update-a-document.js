import { doc, updateDoc } from 'firebase/firestore';
import { firestore } from '../../firebase';
/**
 * Update a document to collection (req collectionName, docId)
 * @param {String} collectionName collectionName (ex: "posts")
 * @param {String} docId (ex: "12345" -> "users/12345")
 * @param {Object} data (ex: { title: "LOREM" })
 */
const updateDocument = async (collectionName, docId, data) => {
  // create a pointer to the Document id
  const tmp = doc(firestore, `${collectionName}/${docId}`);
  // update the doc by data obj
  try {
    await updateDoc(tmp, data);
    console.log('Data updated successfully');
  } catch (error) {
    console.log('An error occurred while updating');
  }
};

export { updateDocument };
