import React from 'react';
import Helmet from 'react-helmet';

import { Heading, IconImagesRow } from '../../components';

import { Link } from 'react-router-dom';

import './LearnScreen.css';

export default function LearnScreen() {
  return (
    <div className="LearnScreenContainer">
      <Helmet>
        <title>Learn | Tasting Grounds</title>
        <meta 
          name="description" 
          content="At Tasting Grounds, we are forever students of coffee. Learning more about coffee is a huge part of why we built the specialty coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>Learn</Heading>
      <div className="LearnScreenBodyContainer">
        <Heading size={Heading.SIZES.XSMALL}>
          At Tasting Grounds, we are students of coffee. Learning more about coffee growing, production, roasting, and brewing is a huge part of why we built this specialty coffee community.
          We will share guides to all things coffee and using the Tasting Grounds app here! 
          </Heading>
        <IconImagesRow />
        <div className="RequestTopic">
        {/* eslint-disable-next-line */}
          Want to see a guide on a particular topic? 📖 <Link to="contact">Let us know</Link>!
        </div>
        <div className="GuidelinesContainer">
          {/* eslint-disable-next-line */}
          <Heading size={Heading.SIZES.SMALL}>⚙ <Link to="learn/grind-sizes">Guide to Coffee Grind Sizes</Link></Heading>
            <Heading size={Heading.SIZES.XSMALL}>Grind size is one of the important and easily-adjustable characteristics of your brew process. This is our guide to grind sizes and how to log them on Tasting Grounds. 
            </Heading>
          {/* eslint-disable-next-line */}
          <Heading size={Heading.SIZES.SMALL}>📋  <Link to="learn/tasting-notes">Guide to Coffee Tasting Notes</Link></Heading>
            <Heading size={Heading.SIZES.XSMALL}>Coffee tasting notes can be confusing for both beginners and seasoned coffee tasters. This is our guide on how to taste coffee and score tasting notes on Tasting Grounds. 
            </Heading>
          {/* eslint-disable-next-line */}
          <Heading size={Heading.SIZES.SMALL}>ℹ  <Link to="/about/information-standards">Guide to Coffee & Roaster Information</Link></Heading>
            <Heading size={Heading.SIZES.XSMALL}>The Tasting Grounds community thrives off of user generated content. The more coffees and roasters you add to our catalog, the more the rest of the community has to explore! We do our best to verify all user created content. Read more about our information review and verification standards.
            </Heading>
        </div>
      </div>
    </div>
  );
}