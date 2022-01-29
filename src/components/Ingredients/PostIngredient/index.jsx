import styles from './index.module.scss';
import { useState } from 'react';
import { postIngredient } from 'src/apis/post';

export const PostIngredient = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    price: '',
    amount: '',
    memo: '',
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await postIngredient(formValues);
      alert('投稿が完了しました！');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h2>新規食食材投稿</h2>
      <form onSubmit={(e) => submit(e)}>
        <input
          type="text"
          placeholder="食材名"
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="値段"
          onChange={(e) =>
            setFormValues({ ...formValues, price: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="数量"
          onChange={(e) =>
            setFormValues({ ...formValues, amount: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="メモ"
          onChange={(e) =>
            setFormValues({ ...formValues, memo: e.target.value })
          }
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};
