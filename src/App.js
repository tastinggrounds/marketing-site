import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import SupportScreen from './screens/SupportScreen/SupportScreen';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <div className="router-container">
          <Link className="home-link" to="/">
            <img
              src="assets/app-icon.png"
              width={45}
              height={45}
              alt="tasting grounds logo"
            />
          </Link>
          <Link className="support-link" to="/support">Support</Link>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/support">
            <SupportScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
