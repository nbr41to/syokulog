import { db } from './config';
import {
  collection,
  doc,
  setDoc,
  getDocs,
  arrayUnion,
  serverTimestamp,
  query,
  where,
} from 'firebase/firestore';

const ingredients = collection(db, 'ingredients');
const posts = collection(db, 'posts');

/* 食材の投稿 */
export const postIngredient = async (ingredient) => {
  try {
    /* 投稿としての保存 */
    const postsDocRef = doc(posts);
    await setDoc(postsDocRef, {
      id: postsDocRef.id,
      type: 'ingredient',
      ...ingredient,
      atDate: serverTimestamp(),
    });

    /* 食材としてデータベースに保存 */
    /* 保存するオブジェクト */
    const dataObj = {
      price: ingredient.price,
      amount: ingredient.amount,
      atDate: new Date(),
    };

    /* 重複をチェック */
    const q = query(ingredients, where('name', '==', ingredient.name)); // TODO)正規表現などで,カタカナとひらがなに対応する
    const snapshot = await getDocs(q);
    if (snapshot.empty) {
      /* 新規追加 */
      const ingredientsDocRef = doc(ingredients);
      await setDoc(ingredientsDocRef, {
        id: ingredientsDocRef.id,
        name: ingredient.name,
        data: [dataObj],
        latestDate: serverTimestamp(),
      });
    } else {
      /* 既存のデータの data プロフィールに追加 */
      const data = snapshot.docs.map((doc) => doc.data())[0];
      await setDoc(
        doc(db, 'ingredients', data.id),
        {
          data: arrayUnion(dataObj),
          atDate: serverTimestamp(),
        },
        { merge: true },
      );
    }

    /* 重複している場合は既存のデータベースに追加 */
    return true;
  } catch (error) {
    throw Error(error);
  }
};

/* 食材の投稿を全て取得 */
export const getIngredients = async () => {
  try {
    const q = query(posts, where('type', '==', 'ingredient'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw Error(error);
  }
};
