import { useEffect, useState } from 'react';
import { getIngredients } from 'src/apis/post';
import styles from './index.module.scss';
import { PostCard } from './PostCard';

export const IngredientPosts = () => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    void (async () => {
      const response = await getIngredients();
      setIngredients(response);
    })();
  }, []);

  return (
    <div className={styles.posts}>
      <h1>食材投稿一覧</h1>
      <div>
        {ingredients.map((ingredient) => (
          <PostCard key={ingredient.id} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};
