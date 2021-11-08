import styles from './index.module.scss';

export const FoodCard = ({ title, sendAt, imageUrl, ingredients, memo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_wrapper}>
        <img src={imageUrl} alt="料理の画像" />
      </div>
      <div>
        <div className={styles.title}>{title}</div>
        <div>
          食材:
          {ingredients.map((ingredient, index) => (
            <span key={index}>[{ingredient}]</span>
          ))}
        </div>
        <div>{memo}</div>
        <div className={styles.atDate}>{sendAt}</div>
      </div>
    </div>
  );
};
