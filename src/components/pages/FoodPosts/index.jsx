import { FoodCard } from 'src/components/food/FoodCard/FoodCard';
import styles from './index.module.scss';

const FoodPostsPage = () => {
  return (
    <div className={styles.posts}>
      <h1>ここは投稿一覧</h1>
      <div>
        <FoodCard title="にしんそば" />
        <FoodCard title="ハンバーグ" />
        <FoodCard title="ラーメン" />
      </div>
    </div>
  );
};

export default FoodPostsPage;
