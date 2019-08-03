import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layout/Header";
import Navbar2 from "./components/layout/Navbar2";
import Navbar from "./components/layout/Navbartp";
import Margens from "./components/layout/Margens";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Folders from "./components/dashboard/Folders";
import NewFolder from "./components/dashboard/NewFolder";
import NewFile from "./components/dashboard/NewFile";
import Files from "./components/dashboard/Files";
import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Navbar2 />
            <Margens />

            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/files" component={Files} />
              <PrivateRoute exact path="/folders" component={Folders} />
              <PrivateRoute exact path="/newfolder" component={NewFolder} />
              <PrivateRoute exact path="/newfile" component={NewFile} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
