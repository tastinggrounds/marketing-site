import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Helmet from 'react-helmet';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import AboutScreen from './screens/AboutScreen/AboutScreen';
import LearnScreen from './screens/LearnScreen/LearnScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen/PrivacyPolicyScreen'
import InformationStandardsScreen from './screens/LearnScreen/LearnContentScreens/InformationStandardsScreen';
import GrindSizesScreen from './screens/LearnScreen/LearnContentScreens/GrindSizesScreen';
import TastingNotesScreen from './screens/LearnScreen/LearnContentScreens/TastingNotesScreen';

import HomeButton from './components/HomeButton/HomeButton';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

import './App.css';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div>
        <div className="AppHeaderContainer">
          <div className="right-grouping">
            <Link className="home-link" to="/">
              <HomeButton />
            </Link>
          </div>
          <div className="left-grouping">
            <Link className="right-link" to="/about">About</Link>
            <Link className="right-link" to="/learn">Learn</Link>
            <Link className="right-link" to="/contact">Contact</Link>
          </div>
        </div>

        <Helmet>
          <title>Tasting Grounds | Discover, Rate, Share, & Brew Coffee Together</title>
          <meta
            name="description"
            content="Log & rate your coffee brews, discover new coffees & roasters, and share with the community of fellow specialty coffee lovers with the free Tasting Grounds app for iOS and Android!"
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
            {/* To remove after indexing */}
            <Route path="/about/our-story">
                <Redirect to="/about" />
            </Route>
            {/* To remove after indexing */}
            <Route path="/about/information-standards">
                <Redirect to="/learn/information-standards" />
            </Route>
            {/* To remove after indexing */}
            <Route path="/about/coffee-grind-sizes">
                <Redirect to="/learn/grind-sizes" />
            </Route>
            <Route exact path="/learn">
                <LearnScreen />
            </Route>
            <Route path="/learn/information-standards">
                <InformationStandardsScreen/>
            </Route>
            <Route path="/learn/grind-sizes">
                <GrindSizesScreen />
            </Route>
            <Route path="/learn/tasting-notes">
                <TastingNotesScreen />
            </Route>
            <Route path="/contact">
              <ContactScreen />
            </Route>
            <Route path="/privacy">
              <PrivacyPolicyScreen />
            </Route>
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
