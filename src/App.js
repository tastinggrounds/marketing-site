import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import OurStoryScreen from './screens/AboutScreen/AboutDetailScreens/OurStoryScreen';
import InformationStandardsScreen from './screens/AboutScreen/AboutDetailScreens/InformationStandardsScreen';

import HomeButton from './components/HomeButton/HomeButton';
import Footer from './components/Footer/Footer';

import './App.css';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <div className="AppHeaderContainer">
          <div className="right-grouping">
            <Link className="home-link" to="/">
              <HomeButton />
            </Link>
          </div>
          <div className="left-grouping">
            <Link className="right-link" to="/about">About</Link>
            <Link className="right-link" to="/contact">Contact</Link>
          </div>
        </div>

        <div className="AppContentContainer">
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/about">
              <AboutScreen />
            </Route>
            <Route exact path="/about/our-story">
                <OurStoryScreen />
            </Route>
            <Route exact path="/about/information-standards">
                <InformationStandardsScreen/>
            </Route>
            <Route path="/contact">
              <ContactScreen />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicyScreen />
            </Route>
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
