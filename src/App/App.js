import './App.css';
import { Route, Switch } from 'react-router-dom';

import Nav from '../components/Nav';
import Dash from '../pages/Dash/Dash';
import Total from '../pages/Total/Total';
import States from '../pages/States/States';
import Help from '../pages/Help/Help';
import StatePage from '../pages/States/StatePage';

function App() {
  return (
    <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact component={Dash}></Route>
          <Route path="/total" exact component={Total}></Route>
          <Route path="/states" exact component={States}></Route>
          <Route path="/help" exact component={Help}></Route>
          <Route path="/state/:state" component={StatePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
