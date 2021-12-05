import React from 'react';
import noIconImage from '../../../assets/svg/icon 1.svg';
import styles from './index.module.scss';

const MyProfilePage = () => {
  // return <div>マイページ</div>;
  return (
    <div className={styles.pageWrap}>
      <div className={styles.titleButton}>
        <div className={styles.title}>プロフィール</div>
        <input className={styles.editButton} type="" value="編集" />
      </div>
      <div className={styles.profileBox}>
        <div className={styles.iconBox}>
          <img src={noIconImage} alt="" />
        </div>
        <div className={styles.nameIntroductionBox}>
          <input className={styles.name} type="text" placeholder="名前" />
          <textarea
            className={styles.introduction}
            name=""
            id=""
            placeholder="自己紹介"
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
