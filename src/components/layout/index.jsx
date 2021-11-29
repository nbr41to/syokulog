import { Footer } from './Footer';
import { Header } from './Header';
import styles from './index.module.scss';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
