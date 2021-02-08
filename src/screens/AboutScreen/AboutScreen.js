import React from 'react';
import Helmet from 'react-helmet';

import { Heading, IconImagesRow } from '../../components';

import { Link } from 'react-router-dom';

import './AboutScreen.css';

export default function AboutScreen() {
  return (
    <div className="AboutScreenContainer">
      <Helmet>
        <title>Tasting Grounds | About the coffee app</title>
        <meta 
          name="description" 
          content="About Tasting Grounds - the specialty coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>About</Heading>
      <div className="AboutScreenBodyContainer">
        <Heading size={Heading.SIZES.MEDIUM}>Our Story</Heading>
          <Heading size={Heading.SIZES.XSMALL}>We created Tasting Grounds to connect the coffee community and help everyone brew better coffee together! <Link to="about/our-story">Read a little more about our beginnings</Link>.
          </Heading>
          <IconImagesRow />
        <Heading size={Heading.SIZES.MEDIUM}>Our Guidelines</Heading>
        <div className="GuidelinesContainer">
          <Heading size={Heading.SIZES.SMALL}>Coffee and Roaster Information</Heading>
            <Heading size={Heading.SIZES.XSMALL}>The Tasting Grounds community thrives off of user generated content. The more coffees and roasters you add to our catalog, the more the rest of the community has to explore! We do our best to verify all user created content. <Link to="/about/information-standards">Read more about our information review and verification standards</Link>.
            </Heading>
          <Heading size={Heading.SIZES.SMALL}>Coffee Grind Sizes</Heading>
            <Heading size={Heading.SIZES.XSMALL}>Grind size is one of the important and easily-adjustable characteristics of your brew process.  <Link to="/about/coffee-grind-sizes">Read more about grind sizes and our options</Link>. 
            </Heading>
        </div>
      </div>
    </div>
  );
}
