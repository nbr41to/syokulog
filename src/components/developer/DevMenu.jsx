import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from 'src/apis/auth';
import styles from './index.module.scss';

export const DevMenu = () => {
  return (
    <div className={styles.dev_menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/foods/posts">投稿一覧（料理）</Link>
        </li>
        <li>
          <Link to="/ingredients/posts">投稿一覧（食材）</Link>
        </li>
        <li>
          <Link to="/foods/posts/a123">投稿詳細（料理）</Link>
        </li>
        <li>
          <Link to="/ingredients/posts/a123">投稿詳細（食材）</Link>
        </li>
        <li>
          <Link to="/foods/new">新規投稿（料理）</Link>
        </li>
        <li>
          <Link to="/ingredients/new">新規投稿（食材）</Link>
        </li>
        <li>
          <Link to="/foods/search">検索（料理）</Link>
        </li>
        <li>
          <Link to="/ingredients/search">検索（食材）</Link>
        </li>
        <li>
          <Link to="/foods/a123">詳細（料理）</Link>
        </li>
        <li>
          <Link to="/ingredients/a123">詳細（食材）</Link>
        </li>
        <li>
          <Link to="/weather">天気の確認</Link>
        </li>
        <li>
          <Link to="/login">ログイン</Link>
        </li>
        <li>
          <Link to="/signup">アカウント登録</Link>
        </li>
        <li>
          <Link to="/my/profile">マイページ</Link>
        </li>
        <li>
          <Link to="/my/foods">自分が記録した料理一覧</Link>
        </li>
        <li>
          <Link to="/my/ingredients">自分が記録した食材一覧</Link>
        </li>
        <li>
          <button onClick={logout}>ログアウト</button>
        </li>
      </ul>
    </div>
  );
};
