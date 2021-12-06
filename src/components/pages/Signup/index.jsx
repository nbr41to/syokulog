import { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './index.module.scss';
import defaultIcon from 'src/assets/svg/parson.svg';
import { register } from '../../../apis/auth';

const SignupPage = () => {
  // input value
  const name = useRef('');
  const email = useRef('');
  const password = useRef('');

  // Router
  const history = useHistory();

  // handler
  const handleRegistBtnClick = async () => {
    const result = await register(
      name.current,
      email.current,
      password.current,
    );
    if (result?.user) {
      history.push('/');
    }
  };

  const handleLoginLinkClick = () => {
    history.push('/login');
  };

  // jsx
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img src={defaultIcon} alt="Icon" className={styles.icon} />
        <button className={styles.iconRegistLink}>写真を登録</button>
        <div className={styles.inputContainer}>
          <input
            placeholder="Name"
            className={styles.topInput}
            onChange={(e) => {
              name.current = e.target.value;
            }}
          />
          <input
            placeholder="Email"
            className={styles.middleInput}
            onChange={(e) => {
              email.current = e.target.value;
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.bottomInput}
            onChange={(e) => {
              password.current = e.target.value;
            }}
          />
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

export default SignupPage;
