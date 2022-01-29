import { useParams } from 'react-router-dom';
import { IngredientDetail } from 'src/components/Ingredients/IngredientDetail';
import styles from './index.module.scss';

const ingredients = [
  {
    id: 'a123',
    title: 'レタス',
  },
  {
    id: 'a124',
    title: 'キャベツ',
  },
  {
    id: 'a125',
    title: '白菜',
  },
];

const ingredientsPosts = [
  {
    id: 'a123',
    title: 'レタス',
    name: 'あまたつ',
    price: 120,
    amount: '1個',
    atDate: new Date('2021/11/10'),
    memo: '',
  },
  {
    id: 'a124',
    title: 'キャベツ',
    name: 'テスト',
    price: 100,
    amount: '1個',
    atDate: new Date('2021/11/11'),
    memo: '',
  },
  {
    id: 'a125',
    title: '白菜',
    name: 'のんちゃん',
    price: 150,
    amount: '1個',
    atDate: new Date('2021/11/12'),
    memo: '',
  },
  {
    id: 'a123',
    title: 'レタス',
    name: 'のぶさん',
    price: 200,
    amount: '1個',
    atDate: new Date('2021/11/13'),
    memo: '',
  },
];

const IngredientDetailPage = () => {
  const { ingredientId } = useParams();

  const ingredient = ingredients.find(
    (ingredient) => ingredient.id === ingredientId,
  );

  const postsData = ingredientsPosts.filter((item) => item.id === ingredientId);

  return (
    <div className={styles.IngredientDetailPage}>
      <h2 className={styles.title}>{ingredient.title}</h2>
      <IngredientDetail postsData={postsData} />
    </div>
  );
};

export default IngredientDetailPage;
