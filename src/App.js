import React from 'react';

import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component';

function App() {
  return (   
    
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}/>
        <Route path="/signin" component={SignInSignOutPage}/>        
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
    
  );
}

export default App;
