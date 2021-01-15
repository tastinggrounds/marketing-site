import React from 'react';

import { Heading } from '../../components';

import { Link } from 'react-router-dom';

import './AboutScreen.css';

export default function AboutScreen() {
  return (
    <div className="AboutScreenContainer">
      <Heading size={Heading.SIZES.XXLARGE}>About</Heading>
      <div className="AboutScreenBodyContainer">
        <Heading size={Heading.SIZES.MEDIUM}>Our Story</Heading>
          <Heading size={Heading.SIZES.XSMALL}>We created Tasting Grounds to connect the coffee community and help everyone brew better coffee together! Read a little more about our beginnings <Link to="about/our-story">here</Link>.
          </Heading>
        <Heading size={Heading.SIZES.MEDIUM}>Our Guidelines</Heading>
          <Heading size={Heading.SIZES.XSMALL}>The Tasting Grounds community thrives off of user generated content. The more coffees and roasters you add to our catalog, the more the rest of the community has to explore! We do our best to verify all user created content. Read more about our information review and verification standards <Link to="/about/information-standards">here</Link>.
          </Heading>
      </div>
    </div>
  );
}
