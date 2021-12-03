import { app } from './config';
import { getFirestore } from 'firebase/firestore';

export const db = getFirestore(app);

export const postIngredient = async (ingredient) => {
  console.log('postIngredient >> :', ingredient);
};
