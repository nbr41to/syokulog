import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { auth } from './config';
import { GoogleAuthProvider } from 'firebase/auth';
import { getUser, setUserData } from './user';

export const googleProvider = new GoogleAuthProvider();

/**
 * パスワードとemailでアカウント登録
 */
export const register = async (name, email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    if (user) {
      const uid = user.uid;
      const userData = {
        uid: uid,
        email: email,
        username: name,
      };
      await setUserData(uid, userData);
    }
    return result;
  } catch (error) {
    alert(error);
  }
};

/**
 * Eメールとパスワードでログイン
 * @param email
 * @param password
 */
export const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error);
  }
};

/**
 * Googleでログイン
 */
export const signInGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const uid = user.uid;

    /* ユーザ情報が作成済みかチェック */
    const exist = await getUser(uid);
    if (!exist) {
      await setUserData(user.uid, {
        uid: user.uid,
        email: user.email,
        username: user.displayName,
      });
    }
  } catch (error) {
    alert(error);
  }
};

/**
 * サインアウト
 */
export const logout = async () => {
  await signOut(auth);
};
