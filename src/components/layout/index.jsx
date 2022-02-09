import { useState } from 'react';
import { useAuth } from 'src/libs/hooks/useAuth';
import { Navbar } from '../commons/Navbar';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './index.module.scss';

export const Layout = ({ children }) => {
  useAuth();
  const [open, setOpen] = useState(false);
  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };
  return (
    <>
      {open && <Navbar closeMenu={closeMenu} />}
      <div className={styles.wrapper}>
        <Header className={styles.header} openMenu={openMenu} />
        <main className={styles.main}>{children}</main>
        <Footer className={styles.footer} />
      </div>
    </>
  );
};
