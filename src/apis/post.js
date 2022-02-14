import { db, storage } from './config';
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
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// ingredientsへのコレクション参照を取得
const ingredients = collection(db, 'ingredients');

// foodへのコレクション参照を取得
const foods = collection(db, 'foods');

// postsへのコレクション参照取得
const posts = collection(db, 'posts');

// Storageの参照取得
const storageRef = (url) => ref(storage, url);

/* 食材の投稿 */
export const postIngredient = async (ingredient) => {
  try {
    // ドキュメント参照取得
    const postsDocRef = doc(posts);
    // データの追加
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

    /* 重複をチェック クエリよりドキュメントをスナップショットで取得*/
    const q = query(ingredients, where('name', '==', ingredient.name)); // TODO)正規表現などで,カタカナとひらがなに対応する
    const snapshot = await getDocs(q);

    // 一致するものがなければ
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

/* 料理の写真の保存 */
export const postFoodImage = async ({ postId, file }) => {
  try {
    const imageUrl = `foods/images/${postId}${file.name}`;
    const foodImageRef = storageRef(imageUrl);
    await uploadBytes(foodImageRef, file);
    return imageUrl;
  } catch (error) {
    throw Error(error);
  }
};
/* 料理の投稿 */
export const postFood = async (foodBasicInfo, ingredients, steps, file) => {
  try {
    // postドキュメント参照取得
    const postsDocRef = doc(posts);

    /* 最初に料理の画像を保存 */
    const savedUrl = await postFoodImage({ postId: postsDocRef.id, file });
    const imageUrl = await getDownloadURL(storageRef(savedUrl));
    console.log(savedUrl);
    console.log(imageUrl);

    // postドキュメントにデータ追加
    await setDoc(postsDocRef, {
      id: postsDocRef.id,
      type: 'foods',
      ingredients,
      foodName: foodBasicInfo.foodName,
      imageUrl, // TODO:画像投稿機能の追加後にpostFood関数の引数にimageUrlを追加する。
      memo: foodBasicInfo.memo,
      atDate: serverTimestamp(),
    });
    // foodドキュメントに追加するdataObjの作成
    const dataObj = {
      imageUrl: 'https://picsum.photos/80', // TODO:画像投稿機能の追加後にpostFoodの引数にimageUrlを追加する。
      userName: 'John Doe', // TODO:ユーザ名がAuthに登録されるようになったら修正。
      memo: foodBasicInfo.memo,
      serving: foodBasicInfo.serving,
      cookingTime: foodBasicInfo.cookingTime,
      ingredients,
      steps,
      atDate: new Date(),
    };

    /* 重複をチェック クエリよりドキュメントをスナップショットで取得*/
    const q = query(foods, where('foodName', '==', foodBasicInfo.foodName)); // TODO)正規表現などで,カタカナとひらがなに対応する
    const snapshot = await getDocs(q);

    // 一致するものがなければ
    if (snapshot.empty) {
      /* 新規追加 */
      const foodDocRef = doc(foods);

      await setDoc(foodDocRef, {
        id: foodDocRef.id,
        name: foodBasicInfo.foodName,
        data: [dataObj],
        latestDate: serverTimestamp(),
      });
    } else {
      /* 既存のデータの data プロフィールに追加 */
      const data = snapshot.docs.map((doc) => doc.data())[0];
      await setDoc(
        doc(db, 'foods', data.id),
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

/* 料理の投稿を全て取得 */
export const getFoods = async () => {
  try {
    const q = query(posts, where('type', '==', 'foods'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw Error(error);
  }
};
