import React, { useState } from 'react';
import styles from './index.module.scss';
import cameraImage from '../../../assets/svg/camera.svg';
import threeLineImage from '../../../assets/svg/three-line.svg';
import formDeleteImage from '../../../assets/svg/form-delete.svg';

const IngredientItem = ({ value, index, deleteIngredient }) => {
  return (
    <div className={styles.ingredientItem}>
      <img src={threeLineImage} />
      <input type="text" defaultValue={value} placeholder="牛乳100ml" />
      <button onClick={() => deleteIngredient(index)}>
        <img src={formDeleteImage} />
      </button>
    </div>
  );
};

const StepItem = ({ value, index, deleteStep }) => {
  return (
    <div className={styles.stepItem}>
      <div>
        <span>{index + 1}</span>
        <img src={threeLineImage} />
      </div>
      <textarea
        name="step"
        cols="30"
        rows="10"
        placeholder="小麦粉をまぜる"
        defaultValue={value}
      ></textarea>
      <button onClick={() => deleteStep(index)}>
        <img src={formDeleteImage} />
      </button>
    </div>
  );
};

const CreateFoodPosts = () => {
  const [ingredients, setIngredient] = useState(['', '', '']);
  const [steps, setStep] = useState(['', '']);

  const addIngredient = () => {
    setIngredient([...ingredients, '']);
  };

  const deleteIngredient = (stepNumber) => {
    const copiedIngredients = [...ingredients];
    copiedIngredients.splice(stepNumber, 1);
    setIngredient(copiedIngredients);
  };

  const addStep = () => {
    setStep([...steps, '']);
  };

  const deleteStep = (index) => {
    const copiedSteps = [...steps];
    copiedSteps.splice(index, 1);
    setStep(copiedSteps);
  };

  return (
    <div className={styles.pageWrap}>
      <section className={styles.photoUploadSection}>
        <div>
          <img src={cameraImage} />
        </div>
        <h2>写真を登録する</h2>
        <span>レシピを投稿して他の人を助けましょう</span>
      </section>
      <section className={styles.recipeFormSection}>
        <div className={styles.basicInfoArea}>
          <div>
            <input type="text" name="food-name" placeholder="タイトル" />
            <textarea
              name="food-detail"
              cols="30"
              rows="10"
              placeholder="レシピを書く"
            ></textarea>
            <div>
              <label htmlFor="serves">人数</label>
              <input id="serves" type="text" placeholder="2人分" />
            </div>
            <div>
              <label htmlFor="cook-time">調理時間</label>
              <input id="cook-time" type="text" placeholder="1時間30分" />
            </div>
          </div>
          <div className={styles.emptySpace}></div>
        </div>

        <div className={styles.ingredientArea}>
          <div>
            <span className={styles.ingredient}>食材</span>
            {ingredients.map((ingredient, index) => {
              return (
                <IngredientItem
                  key={index}
                  index={index}
                  value={ingredient}
                  deleteIngredient={deleteIngredient}
                />
              );
            })}
            <div>
              <button onClick={addIngredient}>＋ 食材を追加する</button>
            </div>
          </div>
          <div className={styles.emptySpace}></div>
        </div>

        <div className={styles.stepArea}>
          <div>
            <span className={styles.step}>手順</span>
            {steps.map((step, index) => {
              return (
                <StepItem
                  key={index}
                  index={index}
                  value={step}
                  deleteStep={deleteStep}
                />
              );
            })}
            <button onClick={addStep}>＋ 手順を追加する</button>
          </div>
          <div className={styles.emptySpace}></div>
        </div>

        <div className={styles.postButtonArea}>
          <button>投稿する</button>
        </div>
      </section>
    </div>
  );
};

export default CreateFoodPosts;
