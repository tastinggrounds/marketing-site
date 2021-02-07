import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Helmet from 'react-helmet';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen/PrivacyPolicyScreen';
import OurStoryScreen from './screens/AboutScreen/AboutDetailScreens/OurStoryScreen';
import InformationStandardsScreen from './screens/AboutScreen/AboutDetailScreens/InformationStandardsScreen';
import GrindSizesScreen from './screens/AboutScreen/AboutDetailScreens/GrindSizesScreen';

import HomeButton from './components/HomeButton/HomeButton';
import Footer from './components/Footer/Footer';
import ScrollTopTop from './components/ScrollToTop/ScrollToTop';

import './App.css';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollTopTop />
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

        <Helmet>
          <title>Tasting Grounds | Discover, Rate, and Share Coffee</title>
          <meta
            name="description"
            content="Log & rate your coffee brews, discover new coffees & roasters, and share with the community of fellow coffee lovers with the Tasting Grounds app for iOS and Android!"
          />
        </Helmet>

        <div className="AppContentContainer">
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route exact path="/about">
              <AboutScreen />
            </Route>
            <Route path="/about/our-story">
                <OurStoryScreen />
            </Route>
            <Route path="/about/information-standards">
                <InformationStandardsScreen/>
            </Route>
            <Route path="/about/coffee-grind-sizes">
                <GrindSizesScreen />
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
