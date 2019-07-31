import React from 'react';

import {Route, Switch} from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignOutPage from './pages/sign-in-sign-out/sign-in-sign-out.component';
import { auth, createUserProfileDocument } from './firebase/firebase-utils.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  componentDidMount() {
    this.unsubscribeFromFirebase = () => auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        });
      }
      this.setState({currentUser: user})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromFirebase();
  }

  render() {
    const {currentUser} = this.state;
    return (   
      
      <div className="App">
        <Header currentUser={currentUser}/>
        <Switch>
        <Route exact path="/" component={HomePage}/>
          <Route path="/signin" component={SignInSignOutPage}/>        
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </div>
      
    )
  }
}

export default App;
