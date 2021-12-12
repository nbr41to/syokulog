import styles from './index.module.scss';

export const PostCard = ({ ingredient }) => {
  return (
    <div className={styles.post_card}>
      <div key={ingredient.id}>
        <h3>{ingredient.name}</h3>
        <div>{ingredient.price} 円</div>
        <div>{ingredient.amount} 個/g</div>
        <div>メモ: {ingredient.memo}</div>
      </div>
    </div>
  );
};
