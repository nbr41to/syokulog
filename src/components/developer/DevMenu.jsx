import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const DevMenu = () => {
  return (
    <div className={styles.dev_menu}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/foods/posts">料理一覧</Link>
        </li>
        <li>
          <Link to="/ingredients/posts">料理一覧</Link>
        </li>
        <li>
          <Link to="/foods/posts/a123">料理投稿の詳細</Link>
        </li>
        <li>
          <Link to="/ingredients/posts/a123">食材投稿の詳細</Link>
        </li>
        <li>
          <Link to="/foods/new">料理の新規投稿</Link>
        </li>
        <li>
          <Link to="/ingredients/new">食材の新規投稿</Link>
        </li>
        <li>
          <Link to="/foods/search">料理の検索</Link>
        </li>
        <li>
          <Link to="/ingredients/search">食材の検索</Link>
        </li>
        <li>
          <Link to="/foods/a123">料理の詳細</Link>
        </li>
        <li>
          <Link to="/ingredients/a123">食材の詳細</Link>
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
      </ul>
    </div>
  );
};
