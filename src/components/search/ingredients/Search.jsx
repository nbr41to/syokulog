import { useState, useEffect } from 'react';
import { search, pot, carrot } from 'src/assets/svg';
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

export const Search = () => {
  const [keyword, setKeyword] = useState('');
  const [filteredIngredients, setFilteredIngredients] = useState(ingredients);
  const [selectIngredients, setSelectIngredients] = useState([]);

  useEffect(() => {
    if (keyword === '') {
      setFilteredIngredients(ingredients);
      return;
    }

    const searchKeywords = keyword
      .trim()
      .toLowerCase()
      .match(/[^\s]+/g);

    if (searchKeywords === null) {
      setFilteredIngredients(ingredients);
      return;
    }

    const result = ingredients.filter((item) =>
      searchKeywords.every((kw) => item.title.toLowerCase().indexOf(kw) !== -1),
    );

    setFilteredIngredients(result.length ? result : ['No Item Found']);
  }, [keyword]);

  const addSelectIngredients = (item) => {
    const newFilteredIngredients = filteredIngredients.filter(
      (data) => item !== data,
    );
    setFilteredIngredients(newFilteredIngredients);
    setSelectIngredients([...selectIngredients, item]);
  };

  const removeSelectIngredients = (item) => {
    const newSelectIngredients = selectIngredients.filter(
      (data) => item !== data,
    );
    setSelectIngredients(newSelectIngredients);
    setFilteredIngredients([...filteredIngredients, item]);
  };

  return (
    <>
      <form
        className={styles.ingredientsForm}
        onSubmit={(e) => e.preventDefault()}
      >
        <div className={styles.searchIcon}>
          <img src={search} alt="検索" />
        </div>
        <input
          type="text"
          placeholder="食材で探す"
          className={styles.inputForm}
          onChange={(e) => setKeyword(e.currentTarget.value)}
        />
      </form>

      <div className={styles.formWrapper}>
        <div className={styles.switchingBtn}>
          <div
            className={`${styles.switchingBtn_card} ${styles.switchingBtn_card_select}`}
          >
            <img src={carrot} alt="食材" />
            <p className={styles.switchingBtn_card_text}>食材</p>
          </div>
          <div className={styles.switchingBtn_card}>
            <img src={pot} alt="料理" />
            <p className={styles.switchingBtn_card_text}>料理</p>
          </div>
        </div>

        <div className={styles.CardList}>
          {selectIngredients.map((item, index) => (
            <div
              key={index}
              className={`${styles.ingredientCard} ${styles.ingredientCard_select}`}
              onClick={() => removeSelectIngredients(item)}
            >
              {item.title}
            </div>
          ))}
          {filteredIngredients.map((item, index) => (
            <div
              key={index}
              className={styles.ingredientCard}
              onClick={() => addSelectIngredients(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.filterWrapper}>
        <div className={styles.ingredientsRecipe}>
          {selectIngredients.map((item, index) => (
            <span key={index} className={styles.ingredientsRecipe_item}>
              {item.title}
            </span>
          ))}
          レシピ（〇〇〇）
        </div>
        <button className={styles.filterBtn}>フィルター</button>
      </div>
    </>
  );
};
