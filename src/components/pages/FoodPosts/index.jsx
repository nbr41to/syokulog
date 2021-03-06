import { useEffect, useState } from 'react';
import { deletePost } from 'src/apis/delete';
import { getFoods } from 'src/apis/post';
import { FoodCard } from 'src/components/food/FoodCard/FoodCard';
import styles from './index.module.scss';

const FoodPostsPage = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    void (async () => {
      const response = await getFoods();
      setFoods(response);
    })();
  }, []);

  const callDeletePost = async (id) => {
    const result = window.confirm('削除しますか？');
    if (!result) return;
    await deletePost(id);
    const response = await getFoods();
    setFoods(response);
  };

  return (
    <div className={styles.page}>
      <h1>ここは投稿一覧</h1>
      <div>
        {foods
          .sort((a, b) => {
            if (a.atDate > b.atDate) {
              return -1;
            }
            if (a.atDate < b.atDate) {
              return 1;
            }
            return 0;
          })
          .map((food) => (
            <FoodCard key={food.id} deletePost={callDeletePost} {...food} />
          ))}
      </div>
    </div>
  );
};

export default FoodPostsPage;
