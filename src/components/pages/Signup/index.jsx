import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';
const Signup = () => {
  const history = useHistory();

  const handleLoginLinkClick = () => {
    history.push('/login');
  };

  const handleRegistBtnClick = () => {
    history.push('/');
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <icon />
        <img
          src={`${process.env.PUBLIC_URL}/images/icon 1.svg`}
          alt="Logo"
          className={styles.icon}
        />
        <button className={styles.iconRegistLink}>写真を登録</button>
        <div className={styles.inputContainer}>
          <input placeholder="Name" className={styles.topInput} />
          <input placeholder="Email" className={styles.middleInput} />
          <input placeholder="Password" className={styles.bottomInput} />
        </div>
        <button onClick={handleRegistBtnClick} className={styles.registButton}>
          登録
        </button>
      </div>
      <div className={styles.linkContainer}>
        <p className={styles.guideLink}>アカウントをすでにお持ちですか？</p>
        <button onClick={handleLoginLinkClick} className={styles.link}>
          ログイン
        </button>
      </div>
    </div>
  );
};

export default Signup;
