import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import Login from "./components/Login";
import FriendsList from "./components/FriendsList"
import PrivateRoute from "./components/PrivateRoute"
import FriendsRoute from "./components/FriendsRoute"
import Header from './components/Header.js'


function App() {

  
  return (
    
    <div className="App">
      <Header/>

          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsRoute} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
          </Switch>

    </div>
  );
}

export default App;
