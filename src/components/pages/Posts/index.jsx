import { FoodCard } from 'src/components/food/FoodCard/FoodCard';
import styles from './index.module.scss';

const PostsPage = () => {
  return (
    <div className={styles.posts}>
      <h1>ここは投稿一覧</h1>
      <div>
        <FoodCard />
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
};

export default PostsPage;
