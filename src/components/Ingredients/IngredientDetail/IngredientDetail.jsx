import styles from './index.module.scss';

export const IngredientDetail = ({ postsData }) => {
  // 価格の配列を作って平均値を算出
  const priceArr = postsData.map((item) => item.price);
  const averagePrice =
    priceArr.reduce((acc, cur) => acc + cur) / priceArr.length;

  // Dateをフォーマット
  const dateFormatted = (date) => {
    let _format = 'YYYY/MM/DD';
    _format = _format.replace(/YYYY/, date.getFullYear().toString());
    _format = _format.replace(/MM/, ('0' + (date.getMonth() + 1)).slice(-2));
    _format = _format.replace(/DD/, ('0' + date.getDate()).slice(-2));
    return _format;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.averagePrice}>
        <p>平均価格</p>
        <p>￥{averagePrice}</p>
      </div>
      <div>
        {postsData?.map((data, index) => (
          <div key={index} className={styles.priceCard}>
            <div>￥{data.price}</div>
            <div className={styles.user}>
              <div className={styles.user_icon}></div>
              <div className={styles.user_name}>{data.name}</div>
            </div>
            <div>{dateFormatted(data.atDate)}</div>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/images/thumb-up2.svg`}
                alt="Logo"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
