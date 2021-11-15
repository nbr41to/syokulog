import styles from './index.module.scss';

export const RecipeDetail = ({ recipeData }) => {
  return (
    <div className={styles.recipe_detail_container}>
      {recipeData?.map((data, index) => (
        <div key={index}>
          <div className={styles.recipe_title}>
            <img src="" alt="" />

            <span>{/* icon */}</span>
            <p className={styles.title}>{data.title}</p>
            <p className={styles.user_name}>{data.username}さん</p>
          </div>
          <div className={styles.recipe}>
            <div className={styles.material}>
              <p className={styles.material_title}>材料[{data.man}人分]</p>
              <ul>
                <li>
                  <span className={styles.material_name}>
                    {data.material[0].name}
                  </span>
                  <span className={styles.material_amount}>
                    {data.material[0].quantity}
                  </span>
                </li>
                <li>
                  <span className={styles.material_name}>
                    {data.material[1].name}
                  </span>
                  <span className={styles.material_amount}>
                    {data.material[1].quantity}
                  </span>
                </li>
                <li>
                  <span className={styles.material_name}>
                    {data.material[2].name}
                  </span>
                  <span className={styles.material_amount}>
                    {data.material[2].quantity}
                  </span>
                </li>
                <li>
                  <span className={styles.material_name}>
                    {data.material[3].name}
                  </span>
                  <span className={styles.material_amount}>
                    {data.material[3].quantity}
                  </span>
                </li>
              </ul>
            </div>
            <div className={styles.procedure}>
              <ol>
                <li>{data.procedure[0]}</li>
                <li>{data.procedure[1]}</li>
                <li>{data.procedure[2]}</li>
                <li>{data.procedure[3]}</li>
              </ol>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
