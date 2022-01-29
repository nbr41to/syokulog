import { db } from './config';
import { collection, doc, setDoc, getDoc } from 'firebase/firestore';

const users = collection(db, 'users');

// ユーザ情報をFireStoreに登録
export const setUserData = async (id, userData) => {
  try {
    const docRef = doc(users, id);
    await setDoc(docRef, userData);
  } catch (error) {
    alert(error);
  }
};

/* IDからユーザ情報を取得 */
export const getUser = async (id) => {
  try {
    const docRef = doc(users, id);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  } catch (error) {
    throw Error(error);
  }
};
