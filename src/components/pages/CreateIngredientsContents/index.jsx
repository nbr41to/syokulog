import styles from './index.module.scss';

const IngredientPostsPage = () => {
  return (
    <div className={styles.posts}>
      <h1>レシピ</h1>
      <h1>食材</h1>
      <IngredientSelects/>
      <h1>＋食材を追加する</h1>
      <div></div>
    </div>
  );
};

const IngredientSelects: React.VFC = () => {
    return (
      <IngredientSelects>
        <iOS/icon/24/threelinemenu>
          <img src="" />
        </iOS/icon/24/threelinemenu>
        <Frame>
          <Text>牛乳100ml</Text>
        </Frame>
        <img src="" />
      </IngredientSelects>
    )
  }
  
  const IngredientSelects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0px 3px;
    background-color: #ffffff;
  `
  const iOS/icon/24/threelinemenu = styled.div`
    height: 27px;
    width: 32px;
    background-color: #ffffff;
  `
  const img1 = styled.div`
    height: 27px;
    width: 32px;
  `
  const Frame = styled.div`
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background-color: #f8f8f8;
  `
  const text2 = styled.div`
    text-align: center;
    vertical-align: middle;
    font-size: 18px;
    font-family: Arial;
    line-height: 120.00000476837158%;
    color: rgba(0, 0, 0, 0.4000000059604645);
  `
  const img3 = styled.div`
    height: 24px;
    width: 24px;
  `
  

export default IngredientPostsPage;
