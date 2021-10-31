import styles from './index.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.header__text}>食ログ</div>
        <div className={styles.header__subtext}>- syokulog -</div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footer__text}>
          © 2021 progLab All rights reserved.
        </div>
      </footer>
    </div>
  );
};
