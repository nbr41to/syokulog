import styles from './index.module.scss';
import { ReactComponent as HomeIcon } from 'src/assets/svg/home.svg';
import { ReactComponent as SearchIcon } from 'src/assets/svg/search.svg';
import { ReactComponent as AddIcon } from 'src/assets/svg/add.svg';
import { ReactComponent as WeatherIcon } from 'src/assets/svg/weather.svg';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.menu_item}>
        <div className={styles.icon}>
          <HomeIcon />
        </div>
        <div className={styles.text}>ホーム</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.icon}>
          <SearchIcon />
        </div>
        <div className={styles.text}>検索</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.icon}>
          <AddIcon />
        </div>
        <div className={styles.text}>作成</div>
      </div>
      <div className={styles.menu_item}>
        <div className={styles.icon}>
          <WeatherIcon />
        </div>
        <div className={styles.text}>天気</div>
      </div>
    </footer>
  );
};
