import styles from './index.module.scss';

export const RecipeDetail = ({ recipeData }) => {
  return (
    <div className={styles.recipe_detail_container}>
      {recipeData?.map((data, index) => (
        <div key={index}>
          <div className={styles.recipe_title}>
            <img
              src={`${process.env.PUBLIC_URL}/images/1.svg`}
              alt="Logo"
              className={styles.recipe_image}
            />
            <div className={styles.title_container}>
              <div className={styles.google_logo}>
                <h1 className={styles.title}>{data.title}</h1>
                <img
                  src={`${process.env.PUBLIC_URL}/images/googleのロゴ1.svg`}
                  alt="Logo"
                  className={styles.google_icon}
                />
              </div>
              <div className={styles.user}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon1.svg`}
                  alt="Logo"
                  className={styles.user_icon}
                />
                <p className={styles.user_name}>{data.username}さん</p>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/like.svg`}
                alt="Logo"
                className={styles.icon}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/comment.svg`}
                alt="Logo"
                className={styles.icon}
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/download.svg`}
                alt="Logo"
                className={styles.icon}
              />
            </div>
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
