import { FoodDetail } from 'src/components/food/FoodDetail';

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

const FoodDetailPage = () => {
  return (
    <div>
      <FoodDetail recipeData={recipeData} />
    </div>
  );
};

export default FoodDetailPage;
