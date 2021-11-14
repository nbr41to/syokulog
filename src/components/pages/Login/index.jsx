import styles from './index.module.scss';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const history = useHistory();

  const handleGoogleBtnClick = () => {
    history.push('/');
  };

  const handleLoginBtnClick = () => {
    history.push('/');
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <button onClick={handleGoogleBtnClick} className={styles.button}>
          Googleでログインをする
        </button>
        <p className={styles.text}>または</p>
        <div className={styles.inputContainer}>
          <input placeholder="email" className={styles.topInput} />
          <input
            type="password"
            placeholder="password"
            className={styles.bottomInput}
          />
        </div>
        <button onClick={handleLoginBtnClick} className={styles.button}>
          ログイン
        </button>
        <button className={styles.link}>パスワードを忘れましたか？</button>
        <div className={styles.linkContainer}>
          <span className={styles.guideLink}>
            アカウントをまだ持っていませんか？
          </span>
          <button onClick={handleSignupClick} className={styles.link}>
            サインアップ
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
