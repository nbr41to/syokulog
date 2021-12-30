// import './styles/reset.css';
import './styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/Home';
import FoodPostsPage from './components/pages/FoodPosts';
import IngredientsSearchPage from 'src/components/pages/IngredientsSearch';
import { Layout } from './components/layout';
import { DevMenu } from 'src/components/developer/DevMenu';

import IngredientPostsPage from 'src/components/pages/IngredientPosts';
import FoodPostsDetailPage from 'src/components/pages/FoodPostsDetail';
import IngredientPostsDetailPage from 'src/components/pages/IngredientPostsDetail';
import CreateFoodPostsPage from 'src/components/pages/CreateFoodPosts';
import CreateIngredientPostsPage from 'src/components/pages/CreateIngredientPosts';
import FoodsSearchPage from 'src/components/pages/FoodsSearch';
import IngredientsSearchPage from 'src/components/pages/IngredientsSearch';
import FoodDetailPage from 'src/components/pages/FoodDetail';
import IngredientDetailPage from 'src/components/pages/IngredientDetail';
import WeatherPage from 'src/components/pages/Weather';
import LoginPage from 'src/components/pages/Login';
import SignupPage from 'src/components/pages/Signup';
import MyProfilePage from 'src/components/pages/MyProfile';
import MyIngredientsPage from 'src/components/pages/MyIngredients';
import MyFoodsPage from 'src/components/pages/MyFoods';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        {/* 開発用メニュー */}
        {process.env.REACT_APP_IS_DEVELOPMENT ? <DevMenu /> : <></>}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/signup" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/foods/posts" exact component={FoodPostsPage} />
          <Route
            path="/ingredients/posts"
            exact
            component={IngredientPostsPage}
          />
          <Route
            path="/foods/posts/:postId"
            exact
            component={FoodPostsDetailPage}
          />
          <Route
            path="/ingredients/posts/:postId"
            exact
            component={IngredientPostsDetailPage}
          />
          <Route path="/foods/new" exact component={CreateFoodPostsPage} />
          <Route
            path="/ingredients/new"
            exact
            component={CreateIngredientPostsPage}
          />
          <Route path="/foods/search" exact component={FoodsSearchPage} />
          <Route
            path="/ingredients/search"
            exact
            component={IngredientsSearchPage}
          />
          <Route path="/foods/:foodId" exact component={FoodDetailPage} />
          <Route
            path="/ingredients/:ingredientId"
            exact
            component={IngredientDetailPage}
          />
          <Route path="/my/profile" exact component={MyProfilePage} />
          <Route path="/my/foods" exact component={MyFoodsPage} />
          <Route path="/my/ingredients" exact component={MyIngredientsPage} />
          <Route path="/weather" exact component={WeatherPage} />
          <Route render={() => <>そのページはありません🥺</>} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
