import { deleteDoc, doc } from 'firebase/firestore';
import { db } from './config';

export const deletePosts = async (id) => {
  const targetDoc = 'posts';
  // 単一のドキュメントリファレンスを取得
  const docRef = doc(db, targetDoc, id);
  // 削除
  await deleteDoc(docRef);
};

export const deleteFoods = async (id) => {
  const targetDoc = 'foods';
  // 単一のドキュメントリファレンスを取得
  const docRef = doc(db, targetDoc, id);
  // 削除
  await deleteDoc(docRef);
};
