import Nav from './components/Nav';
import Home from './components/Home';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Plante from './components/Plante';
import Product from './components/Product';

function App () {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/plantes/:id" component={Plante} />
        <Route exact path="/plantes/:id/products" component={Product}/>
      </Switch>
    </div>
  );
}

export default App;
