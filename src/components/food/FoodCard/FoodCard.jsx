import styles from './index.module.scss';
import { ReactComponent as DeleteIconButton } from 'src/assets/svg/cancel 1.svg';

// yy/mm/ddでフォーマット
const format = (date) => {
  const y = date.getFullYear();
  const m = ('00' + (date.getMonth() + 1)).slice(-2);
  const d = ('00' + date.getDate()).slice(-2);
  return `${y}/${m}/${d}`;
};

export const FoodCard = ({
  foodName,
  atDate,
  imageUrl,
  ingredients,
  memo,
  id,
  deletePost,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_wrapper}>
        <img src={imageUrl} alt="料理の画像" />
      </div>
      <div>
        <div className={styles.title}>
          <span>{foodName}</span>
          <div className={styles.cancel_button}>
            <DeleteIconButton
              onClick={() => deletePost(id)}
              className={styles.cancel_button}
            />
          </div>
        </div>
        <div>
          食材:
          {ingredients.map((ingredient, index) => (
            <span key={index}>[{ingredient}]</span>
          ))}
        </div>
        <div>{memo}</div>
        <div className={styles.atDate}>{format(atDate.toDate())}</div>
      </div>
    </div>
  );
};
