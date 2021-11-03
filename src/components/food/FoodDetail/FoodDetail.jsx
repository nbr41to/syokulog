import styles from './index.module.scss';

export const FoodDetail = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <h2>Food Detail</h2>
      </div>
      <div>
        <h3>使用した食材</h3>
        <div>
          <button>人参</button>
          <button>人参</button>
          <button>人参</button>
          <button>人参</button>
          <button>人参</button>
        </div>
      </div>
      <div>
        <h3>メモ</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec</p>
      </div>
    </div>
  );
};
