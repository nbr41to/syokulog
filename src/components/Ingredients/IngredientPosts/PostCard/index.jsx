import styles from './index.module.scss';
import { ReactComponent as DeleteIconButton } from 'src/assets/svg/cancel 1.svg';

export const PostCard = ({ ingredient, deletePost }) => {
  return (
    <div className={styles.post_card}>
      <div key={ingredient.id}>
        <div className={styles.title}>
          <h3>{ingredient.name}</h3>
          <div className={styles.cancel_button}>
            <DeleteIconButton
              onClick={() => deletePost(ingredient.id)}
              className={styles.cancel_button}
            />
          </div>
        </div>
        <div>{ingredient.price} 円</div>
        <div>{ingredient.amount} 個/g</div>
        <div>メモ: {ingredient.memo}</div>
      </div>
    </div>
  );
};
