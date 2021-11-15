import { RecipeDetail } from 'src/components/ingredient/recipeDetail/RecipeDetail';

export const RecipeDetailPage = () => {
  const recipeData = [
    {
      id: '111',
      title: 'TKG',
      username: 'のん',
      man: '1',
      material: [
        {
          name: 'たまご',
          quantity: '1個',
        },
        {
          name: 'ごま油',
          quantity: '5mg',
        },
        {
          name: '高菜',
          quantity: '10g',
        },
        {
          name: '醤油',
          quantity: '小さじ1杯',
        },
      ],
      procedure: [
        'ご飯をよそう',
        '高菜を乗せる',
        '醤油をかける',
        'ごま油をかける',
      ],
    },
  ];
  return (
    <div>
      <RecipeDetail recipeData={recipeData} />
    </div>
  );
};
