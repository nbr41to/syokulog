import styles from './index.module.scss';

export const FoodCard = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <img src="https://picsum.photos/80" alt="" />
      <div className={styles.title}>{title}</div>
      <div className={styles.atDate}>2021/11/03 18:45</div>
    </div>
  );
};
