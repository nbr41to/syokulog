import { app } from './config';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

export const db = getFirestore(app);

// ユーザ情報をFireStoreに登録
export const setUserData = async (id, userData) => {
  try {
    const docRef = doc(db, 'users', id);
    await setDoc(docRef, userData);
  } catch (error) {
    alert(error);
  }
};
