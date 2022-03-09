import './App.css';

import { Route, Switch } from 'react-router-dom';

import Banner from './components/Banner/Banner';
import FollowersPage from './pages/FollowersPage/FollowersPage';
import TodoPage from './pages/TodoPage/TodoPage';

function App() {
  return (
    <div className="App">
      <Banner />
      <Switch>
        <Route strict exact path="/" component={TodoPage} />
        <Route strict exact path="/followers" component={FollowersPage} />
      </Switch>
    </div>
  );
}

export default App;
