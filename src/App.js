import Main from './components/Main';

import './App.css';
import { Route, Switch } from 'react-router';
import About from './components/About';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
