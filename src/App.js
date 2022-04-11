import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Navigate,
  Routes,
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
          <div className="left-grouping">
            <Link className="home-link" to="/">
              <HomeButton />
            </Link>
          </div>
          <div className="right-grouping">
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
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/learn" element={<LearnScreen />} />
            <Route path="/learn/information-standards" element={<InformationStandardsScreen />} />
            <Route path="/learn/grind-sizes" element={<GrindSizesScreen />} />
            <Route path="/learn/flavor-profiles" element={<FlavorProfilesScreen />} />
            <Route path="/learn/tasting-notes" element={<TastingNotesScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/privacy" element={<PrivacyPolicyScreen />} />
            <Route path="/terms" element={<TermsScreen />} />
            <Route path="/data-removal" element={<DataRemovalScreen />} />
            <Route path="/download" element={<DownloadRedirect />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </div>
      </div>
      <Footer />
    </Router>
  );
}
