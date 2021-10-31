import './styles/reset.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import { Layout } from './components/layout';

const App = () => {
  return (
    <Layout>
      <BrowserRouter>
        {/* Q)Switchの必要性とは？ */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" render={() => <>user page だよ</>} />
        </Switch>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
