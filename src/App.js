import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import AboutScreen from './screens/AboutScreen/AboutScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import DataRemovalScreen from './screens/DataRemovalScreen/DataRemovalScreen';
import FlavorProfilesScreen from './screens/LearnScreen/LearnContentScreens/FlavorProfileScreen';
import GrindSizesScreen from './screens/LearnScreen/LearnContentScreens/GrindSizesScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import InformationStandardsScreen from './screens/LearnScreen/LearnContentScreens/InformationStandardsScreen';
import LearnScreen from './screens/LearnScreen/LearnScreen';
import PrivacyPolicyScreen from './screens/LegalScreens/PrivacyPolicyScreen';
import RoastProfilesScreen from './screens/LearnScreen/LearnContentScreens/RoastProfilesScreen';
import SupportScreen from './screens/SupportScreen/SupportScreen';
import TastingNotesScreen from './screens/LearnScreen/LearnContentScreens/TastingNotesScreen';
import TermsScreen from './screens/LegalScreens/TermsScreen';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DownloadRedirect from './components/DownloadRedirect/DownloadRedirect';

import './App.css';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop />
      <div>
        <Navbar />
        <HelmetProvider>
          <Helmet>
            <title>Tasting Grounds | Discover, Rate, Share, & Brew Coffee Together</title>
            <meta
              name="description"
              content="Log & rate your coffee brews, discover new coffees & roasters, and share with the community of fellow specialty coffee lovers with the free Tasting Grounds app for iOS and Android! Tasting Grounds is what some may call the Untappd or Vivino of coffee!"
            />
            <link rel="canonical" href="https://tastinggrounds.com" />
          </Helmet>
        </HelmetProvider>
        <div className="AppContentContainer">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about" element={<AboutScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/data-removal" element={<DataRemovalScreen />} />
            <Route path="/download" element={<DownloadRedirect />} />
            <Route path="/learn" element={<LearnScreen />} />
            <Route path="/learn/flavor-profiles" element={<FlavorProfilesScreen />} />
            <Route path="/learn/grind-sizes" element={<GrindSizesScreen />} />
            <Route path="/learn/information-standards" element={<InformationStandardsScreen />} />
            <Route path="/learn/roast-profiles" element={<RoastProfilesScreen />} />
            <Route path="/learn/tasting-notes" element={<TastingNotesScreen />} />
            <Route path="/privacy" element={<PrivacyPolicyScreen />} />
            <Route path="/support-us" element={<SupportScreen />} />
            <Route path="/terms" element={<TermsScreen />} />
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
