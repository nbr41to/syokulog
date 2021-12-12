import styles from './index.module.scss';
import { ReactComponent as HamburgerIcon } from 'src/assets/svg/three-line.svg';
import { ReactComponent as AccountIcon } from 'src/assets/svg/parson.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <HamburgerIcon className={styles.hamburger} />
      <div className={styles.header__text}>☆食ログ☆</div>
      <AccountIcon className={styles.account} />
    </header>
  );
};
