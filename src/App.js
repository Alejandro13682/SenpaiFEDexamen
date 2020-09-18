import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Screens/Home';


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Navbar />
        <Switch>
        <Route exact path='/' component={Home} />
          <Route path='/products' component={ProductList} />
          <Route path='/details' component={Details} />
          <Route path='/cart' component={Cart} />          
          <Route component={Default} />         
        </Switch>        
        <Modal /> 
        <Footer /> 
      </React.Fragment>
    );
  }
}

export default App;
