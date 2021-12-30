import { collectionQueryFetcher } from './fetchers';
import useSWR from 'swr';

/* テスト用のサンプル型 */
type DataType = {
  id: string;
  name: string;
  price: string;
  amount: string;
  memo: string;
};

/* 食材と料理を合併するあたりで使用しようかと思っている */
export const usePosts = () => {
  const { data, error } = useSWR<DataType[]>(
    '/posts/type/ingredient',
    collectionQueryFetcher,
  );
  if (error) {
    console.error(error);
  }

  return data ? data : [];
};
