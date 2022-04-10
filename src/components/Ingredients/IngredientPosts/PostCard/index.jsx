import styles from './index.module.scss';
import { ReactComponent as CancelIconButton } from 'src/assets/svg/cancel 1.svg';
import { deletePosts } from 'src/apis/delete';

const handleClick = async (id) => {
  const result = window.confirm('削除しますか？');
  if (!result) return;
  await deletePosts(id);
};
export const PostCard = ({ ingredient }) => {
  return (
    <div className={styles.post_card}>
      <div key={ingredient.id}>
        <div className={styles.title}>
          <h3>{ingredient.name}</h3>
          <div className={styles.cancel_button}>
            <CancelIconButton
              onClick={() => handleClick(ingredient.id)}
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
