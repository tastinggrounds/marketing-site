import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import SupportScreen from './screens/SupportScreen/SupportScreen';
import FeedbackScreen from './screens/FeedbackScreen/FeedbackScreen';

import './App.css';

export default function App() {
  return (
    <Router>
      <div>
        <div className="router-container">
          <div className="right-grouping">
            <Link className="home-link" to="/">
              <img
                src="assets/app-icon.png"
                width={45}
                height={45}
                alt="tasting grounds logo"
              />
            </Link>
          </div>
          <div className="left-grouping">
            <Link className="right-link" to="/support">Support</Link>
            <Link className="right-link" to="/feedback">Feedback</Link>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}/`}>
            <HomeScreen />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/support`}>
            <SupportScreen />
          </Route>
          <Route path={`${process.env.PUBLIC_URL}/feedback`}>
            <FeedbackScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
