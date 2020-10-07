import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList"


const FriendsRoute = () => {
  return (
    <Router>
      <div className="FriendsRoute">
        <ul>
          <li>
            <Link to="/friends">F.R.I.E.N.D.S.</Link>
          </li>
          <li>
            <Link to="/add">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute path="/add" component={AddFriend} />
        </Switch>
      </div>
    </Router>
  );
}

export default FriendsRoute