import { app } from './config';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  arrayUnion,
  serverTimestamp,
  query,
  where,
} from 'firebase/firestore';
export const db = getFirestore(app);

const ingredients = collection(db, 'ingredients');
const posts = collection(db, 'posts');

// ユーザ情報をFireStoreに登録 TODO）user.jsを作成してそこに移動
export const setUserData = async (id, userData) => {
  try {
    const docRef = doc(db, 'users', id);
    await setDoc(docRef, userData);
  } catch (error) {
    alert(error);
  }
};

/* 食材の投稿 */
export const postIngredient = async (ingredient) => {
  try {
    /* 投稿としての保存 */
    const postsDocRef = doc(posts);
    await setDoc(postsDocRef, {
      id: postsDocRef.id,
      ingredient,
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
