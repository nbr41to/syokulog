import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, login, signInGoogle } from 'src/apis/auth';
import styles from './index.module.scss';

const LoginPage = () => {
  // input value
  const email = useRef('');
  const password = useRef('');

  // Router
  const history = useHistory();

  // handler
  const handleLoginBtnClick = async () => {
    await login(email.current, password.current);
    if (auth.currentUser) {
      history.push('/');
    }
  };

  const handleGoogleBtnClick = async () => {
    try {
      const result = await signInGoogle();
      if (result) {
        history.push('/');
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSignupClick = () => {
    history.push('/signup');
  };

  // jsx
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <button onClick={handleGoogleBtnClick} className={styles.button}>
          Googleでログインをする
        </button>
        <p className={styles.text}>または</p>
        <div className={styles.inputContainer}>
          <input
            placeholder="email"
            className={styles.topInput}
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
          <input
            type="password"
            placeholder="password"
            className={styles.bottomInput}
            onChange={(e) => {
              password.current = e.target.value;
            }}
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
