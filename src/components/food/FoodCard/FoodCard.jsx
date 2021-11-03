import styles from './index.module.scss';

export const FoodCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Food title</div>
      <div className={styles.atDate}>2021/11/03 18:45</div>
    </div>
  );
};
