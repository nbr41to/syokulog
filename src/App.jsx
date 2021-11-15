// import './styles/reset.css';
import './styles/global.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/Home';
import FoodPostsPage from './components/pages/FoodPosts';
import { Layout } from './components/layout';
import IngredientPostsPage from './components/pages/IngredientPosts';
import { RecipeDetailPage } from 'src/components/pages/RecipeDetailPage';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        {/* Q)Switchの必要性とは？ */}
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/foods/posts" exact component={FoodPostsPage} />
          <Route
            path="/foods/ingredients"
            exact
            component={IngredientPostsPage}
          />
          <Route path="/recipe" exact component={RecipeDetailPage} />
          <Route path="/users" render={() => <>user page だよ</>} />
          <Route render={() => <>そのページはありません🥺</>} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
