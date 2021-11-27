<<<<<<< HEAD
import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';
import defaultIcon from 'src/assets/svg/icon 1.svg';
const SignupPage = () => {
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
        <img src={defaultIcon} alt="Icon" className={styles.icon} />
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
=======
import React from 'react';

const SignupPage = () => {
  return <div>アカウント登録</div>;
>>>>>>> 795f825dd85df0c110ed6437f009d9c80788f93a
};

export default SignupPage;
