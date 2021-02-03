import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Aromatherapie from './components/Aromatherapie';
import Homeopathie from './components/Homeopathie';
import Superaliment from './components/Superaliment';


function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/aromatherapie' component={Aromatherapie} />
      <Route path='/superaliment' component={Superaliment} />
      <Route path='/homeopathie' component={Homeopathie} />
      </Switch>

    </div>
  );
}

export default App;
