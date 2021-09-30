import Main from './components/Main';

import './App.css';
import { Route, Switch } from 'react-router';

function App() {
  return (
    <div>
      <Switch>
        <Route>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
