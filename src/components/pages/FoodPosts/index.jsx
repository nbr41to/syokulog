import { FoodCard } from 'src/components/food/FoodCard/FoodCard';
import styles from './index.module.scss';

const data = [
  {
    id: 'a123',
    title: 'にしんそば',
    sendAt: '2020/01/01',
    imageUrl: 'https://picsum.photos/80',
    ingredients: ['イワシ', 'そば', 'ごま油'],
    memo: 'にしんが売ってなかった',
  },
  {
    id: 'a124',
    title: 'ハンバーグ',
    sendAt: '2020/01/01',
    imageUrl: 'https://picsum.photos/80',
    ingredients: ['ひき肉（牛肉）', '玉ねぎ'],
  },
  {
    id: 'a125',
    title: 'ラーメン',
    sendAt: '2020/01/01',
    imageUrl: 'https://picsum.photos/80',
    ingredients: ['ひき肉（牛肉）', '玉ねぎ'],
    memo: '駅前の家系ラーメン屋',
  },
];

const FoodPostsPage = () => {
  return (
    <div className={styles.page}>
      <h1>ここは投稿一覧</h1>
      <div>
        {data.map((post) => (
          <FoodCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default FoodPostsPage;
