import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Helmet from 'react-helmet';

import AboutScreen from './screens/AboutScreen/AboutScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import DataRemovalScreen from './screens/DataRemovalScreen/DataRemovalScreen';
import FlavorProfilesScreen from './screens/LearnScreen/LearnContentScreens/FlavorProfileScreen';
import GrindSizesScreen from './screens/LearnScreen/LearnContentScreens/GrindSizesScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import InformationStandardsScreen from './screens/LearnScreen/LearnContentScreens/InformationStandardsScreen';
import LearnScreen from './screens/LearnScreen/LearnScreen';
import PrivacyPolicyScreen from './screens/LegalScreens/PrivacyPolicyScreen';
import TastingNotesScreen from './screens/LearnScreen/LearnContentScreens/TastingNotesScreen';
import TermsScreen from './screens/LegalScreens/TermsScreen';

import HomeButton from './components/HomeButton/HomeButton';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DownloadRedirect from './components/DownloadRedirect/DownloadRedirect';

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
            content="Log & rate your coffee brews, discover new coffees & roasters, and share with the community of fellow specialty coffee lovers with the free Tasting Grounds app for iOS and Android! Tasting Grounds is what some may call the Untappd or Vivino of coffee!"
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
            <Route exact path="/learn">
              <LearnScreen />
            </Route>
            <Route path="/learn/information-standards">
              <InformationStandardsScreen />
            </Route>
            <Route path="/learn/grind-sizes">
              <GrindSizesScreen />
            </Route>
            <Route path="/learn/flavor-profiles">
              <FlavorProfilesScreen />
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
            <Route path="/terms">
              <TermsScreen />
            </Route>
            <Route path="/data-removal">
              <DataRemovalScreen />
            </Route>
            <Route path="/download" exact component={() => <DownloadRedirect />} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
