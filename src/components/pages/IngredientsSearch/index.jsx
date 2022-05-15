import styles from './index.module.scss';
import { Search } from 'src/components/search/ingredients/Search';

const IngredientsSearchPage = () => {
  return (
    <div className={styles.ingredientsSearchPage}>
      <Search />
    </div>
  );
};

export default IngredientsSearchPage;
