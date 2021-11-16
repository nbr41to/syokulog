import { FoodCard } from 'src/components/food/FoodCard/FoodCard';
import styles from './index.module.scss';

const FoodPostsPage = () => {
  return (
    <div className={styles.posts}>
      <h1>ここは投稿一覧</h1>
      <div>
        <FoodCard ごはん/>
        <FoodCard さかな/>
        <FoodCard まめ/>
      </div>
    </div>
  );
};

export default FoodPostsPage;
