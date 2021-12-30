import { useAuth } from 'src/libs/hooks/useAuth';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './index.module.scss';

export const Layout = ({ children }) => {
  useAuth();
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <main className={styles.main}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
