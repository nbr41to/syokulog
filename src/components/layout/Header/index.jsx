import styles from './index.module.scss';
import { ReactComponent as HamburgerIcon } from 'src/assets/svg/three-line.svg';
import { ReactComponent as AccountIcon } from 'src/assets/svg/parson.svg';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'src/apis/config';
import { useState } from 'react';

export const Header = ({ openMenu }) => {
  const [currentUser, setCurrentUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });
  return (
    <>
      {currentUser === null ? (
        <header className={styles.header}>
          <div className={styles.hamburger} />
          <div className={styles.header__text}>☆食ログ☆</div>
          <AccountIcon className={styles.account} />
        </header>
      ) : (
        <header className={styles.header}>
          <HamburgerIcon onClick={openMenu} className={styles.hamburger} />
          <div className={styles.header__text}>☆食ログ☆</div>
          <AccountIcon className={styles.account} />
        </header>
      )}
    </>
  );
};
