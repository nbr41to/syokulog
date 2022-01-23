import React from 'react';

const menuTitles = ['ホーム', '検索', '投稿', '天気'];

export const Navbar = ({ closeMenu }) => (
  <>
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
    <div
      style={{
        width: '374px',
        height: '100%',
        position: 'absolute',
        animation: `name 1s forwards`,
      }}
      onClick={closeMenu}
    >
      <div
        style={{
          borderRight: '1px solid rgba(0, 0, 0, 0.2)',
          width: '224px',
          height: '918px',
          backgroundColor: 'white',
          position: 'absolute',
          animation: `toLeft 1s forwards`,
          transform: 'translateX(100%)',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <p>メニュー</p>
        </div>
        <ul>
          {menuTitles.map((title, i) => (
            <li key={i} style={{ padding: '10px,0' }}>
              {title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
);
