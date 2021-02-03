import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// import Aromatherapie from './components/Plante.';
// import Homeopathie from './components/Homeopathie';
// import Superaliment from './components/Superaliment';

import Plante from './components/Plante';

function App () {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/plantes/:id" component={Plante} />
      </Switch>
    </div>
  );
}

export default App;
