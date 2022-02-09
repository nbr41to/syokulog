import { Link } from 'react-router-dom';
import weather from '../../../assets/svg/weather.svg';
import search from '../../../assets/svg/search.svg';
import home from '../../../assets/svg/home.svg';
import add from '../../../assets/svg/add.svg';

// ナビゲーションバーアイテム
const menuItems = [
  { title: 'ホーム', imgPath: home, to: '/' },
  { title: '投稿一覧（料理）', imgPath: search, to: '/foods/posts' },
  { title: '投稿一覧（食材）', imgPath: add, to: '/ingredients/posts' },
  { title: '投稿詳細（料理）', imgPath: weather, to: '/foods/posts/a123' },
  {
    title: '新規投稿（料理）',
    imgPath: weather,
    to: '/ingredients/posts/a123',
  },
  { title: '新規投稿（食材）', imgPath: weather, to: '/ingredients/new' },
  { title: '検索（料理）', imgPath: weather, to: '/foods/search' },
  { title: '検索（食材）', imgPath: weather, to: '/ingredients/search' },
  { title: '詳細（料理）', imgPath: weather, to: '/foods/a123' },
  { title: '詳細（食材）', imgPath: weather, to: '/ingredients/a123' },
  { title: '天気の確認', imgPath: weather, to: '/weather' },
  { title: 'ログイン', imgPath: weather, to: '/login' },
  { title: 'アカウント登録', imgPath: weather, to: '/signup' },
  { title: 'マイページ', imgPath: weather, to: '/my/profile' },
  { title: '自分が記録した料理一覧', imgPath: weather, to: '/my/foods' },
  { title: '自分が記録した食材一覧', imgPath: weather, to: '/my/ingredients' },
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
    <div
      style={{
        width: '374px',
        height: '784px',
        position: 'absolute',
        animation: 'name 0.7s forwards',
      }}
      onClick={closeMenu}
    >
      {/* ナビゲーションバー */}
      <div
        style={{
          borderRight: '1px solid rgba(0, 0, 0, 0.2)',
          width: '224px',
          height: '784px',
          overflow: 'auto',
          backgroundColor: 'white',
          position: 'absolute',
          animation: 'toLeft 0.7s forwards',
          transform: 'translateX(100%)',
        }}
      >
        {/* ナビゲーションバータイトル */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
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
