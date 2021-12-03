import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { app } from './config';
import { GoogleAuthProvider } from 'firebase/auth';

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

/**
 * Googleでログイン
 */
export const signInGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

/**
 * サインアウト
 */
export const logout = async () => {
  await signOut(auth);
};
