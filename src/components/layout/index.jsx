import styles from './index.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <h1 className={styles.header__app_logo}>食ログ - syokulog -</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
