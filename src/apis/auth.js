import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { app } from './config';
import { GoogleAuthProvider } from 'firebase/auth';
import { setUserData } from './post';

export const auth = getAuth(app);
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
      setUserData(uid, userData);
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
    return result;
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
