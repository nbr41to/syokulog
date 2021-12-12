import { app } from '../config';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  FirestoreDataConverter,
  WithFieldValue,
  QueryDocumentSnapshot,
} from 'firebase/firestore';
export const db = getFirestore(app);

/* Firestore data converter */
const converter = <T>(): FirestoreDataConverter<T> => ({
  toFirestore: (data: WithFieldValue<T>) => data || {},
  fromFirestore: (snapshot: QueryDocumentSnapshot<T>) => snapshot.data(),
});

/**
 * collection doc
 * /collectionName/docId
 * docId is optional
 */
export const collectionDocFetcher = async <T>(
  key: string,
): Promise<T | T[] | undefined> => {
  const [_, collectionParam, docParam] = key.split('/');
  if (!collectionParam) return [];
  try {
    const collectionRef = collection(db, collectionParam).withConverter(
      converter<T>(),
    );
    const docRef =
      docParam && doc(collectionRef, docParam).withConverter(converter<T>());
    const snapshot = docRef
      ? await getDoc(docRef)
      : await getDocs(collectionRef);
    // withConverter で型を変換する
    if ('docs' in snapshot) {
      return snapshot.docs.map((doc) => doc.data());
    }
    return snapshot.data();
  } catch (error) {
    throw Error('error');
  }
};

/**
 * collection query
 * /collectionName/queryField/queryValue
 */
export const collectionQueryFetcher = async <T>(key: string): Promise<T[]> => {
  const [_, collectionParam, queryField, queryValue] = key.split('/');
  console.log(collectionParam, queryField, queryValue);
  if (!collectionParam || !queryField || !queryValue)
    throw Error('not found key value');
  try {
    const queryRef = query(
      collection(db, collectionParam).withConverter(converter<T>()),
      where(queryField, '==', queryValue),
    );
    const snapshot = await getDocs(queryRef);
    return snapshot.docs.map((doc) => doc.data());
  } catch (error) {
    throw Error('error');
  }
};
