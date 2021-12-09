import { IngredientPosts } from 'src/components/Ingredients/IngredientPosts';
import styles from './index.module.scss';

const IngredientPostsPage = () => {
  return (
    <div className={styles.posts}>
      <IngredientPosts />
    </div>
  );
};

export default IngredientPostsPage;
