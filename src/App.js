import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
        <Products></Products>
        </Route>
        <Route path='productDetail/:id'>
          <ProductDetail></ProductDetail>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
