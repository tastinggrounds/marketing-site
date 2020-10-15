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
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen/PrivacyPolicyScreen';

import HomeButton from './components/HomeButton/HomeButton';

import './App.css';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="router-container">
          <div className="right-grouping">
            <Link className="home-link" to="/">
              <HomeButton />
            </Link>
          </div>
          <div className="left-grouping">
            <Link className="right-link" to="/support">Support</Link>
            <Link className="right-link" to="/feedback">Feedback</Link>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/support">
            <SupportScreen />
          </Route>
          <Route path="/feedback">
            <FeedbackScreen />
          </Route>
          <Route path="/privacy">
            <PrivacyPolicyScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
