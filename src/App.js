import { Route, Switch } from 'react-router';
import './App.css';

import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';

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

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
