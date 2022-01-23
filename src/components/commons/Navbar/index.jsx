import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import weather from '../../../assets/svg/weather.svg';
import search from '../../../assets/svg/search.svg';
import home from '../../../assets/svg/home.svg';
import add from '../../../assets/svg/add.svg';

// ナビゲーションバーアイテム
const menuItems = [
  { title: 'ホーム', imgPath: home, to: '/' },
  { title: '検索', imgPath: search, to: 'foods/search' },
  { title: '投稿', imgPath: add, to: '/foods/posts' },
  { title: '天気', imgPath: weather, to: '/weather' },
];

export const Navbar = ({ closeMenu }) => (
  <>
    {/* アニメーション定義 */}
    <style>
      {`@keyframes toLeft {
  0% {
    transform: translateX(-224px);
    }
  
    100% {
    transform: translateX(0px);
    }
      }`}
      {`
        @keyframes name {
          0% { background: rgba(242,242,242,0.1); }
          50% { background: rgba(242,242,242,0.7); }
          100% { background: rgba(242,242,242,0.8); }
        }
        `}
    </style>
    {/* 背景色：グレー */}
    <div className={styles.navBgcolor} onClick={closeMenu}>
      {/* ナビゲーションバー */}
      <div
        style={{
          borderRight: '1px solid rgba(0, 0, 0, 0.2)',
          width: '224px',
          height: '918px',
          backgroundColor: 'white',
          position: 'absolute',
          animation: 'toLeft 1s forwards',
          transform: 'translateX(100%)',
        }}
      >
        {/* ナビゲーションバータイトル */}
        <div style={{ textAlign: 'center' }}>
          <p>メニュー</p>
        </div>
        {/* ナビゲーションバーアイテム */}
        <ul>
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.to}
                style={{
                  color: 'rgba(0, 0, 0, 0.8)',
                  padding: '10px 0px',
                  textDecoration: 'none',
                }}
              >
                <img
                  style={{ width: '20px' }}
                  src={item.imgPath}
                  alt={'watherIcon'}
                />
                <span style={{ marginLeft: '10px' }}>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);
