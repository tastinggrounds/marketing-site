import React from 'react';
import Helmet from 'react-helmet';

import { Heading } from '../../components';

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
          At Tasting Grounds, we are forever students of coffee. Learning more about coffee growing, production, roasting, and brewing is a huge part of why we built this specialty coffee community. 
          </Heading>
        <div className="GuidelinesContainer">
          <Heading size={Heading.SIZES.SMALL}>Guide to Coffee & Roaster Information on Tasting Grounds</Heading>
            <Heading size={Heading.SIZES.XSMALL}>The Tasting Grounds community thrives off of user generated content. The more coffees and roasters you add to our catalog, the more the rest of the community has to explore! We do our best to verify all user created content. <Link to="/about/information-standards">Read more about our information review and verification standards</Link>.
            </Heading>
          <Heading size={Heading.SIZES.SMALL}>Guide to Coffee Grind Sizes</Heading>
            <Heading size={Heading.SIZES.XSMALL}>Grind size is one of the important and easily-adjustable characteristics of your brew process. <Link to="learn/coffee-grind-sizes">Read more about grind sizes and how to log them on Tasitng Grounds</Link>. 
            </Heading>
          <Heading size={Heading.SIZES.SMALL}>Guide to Coffee Tasting Notes</Heading>
            <Heading size={Heading.SIZES.XSMALL}>Coffee tasting notes can be confusing for both beginners and seasoned coffee tasters. <Link to="learn/coffee-grind-sizes">Read more about how to taste coffee and score tasting notes on Tasting Grounds</Link>. 
            </Heading>
        </div>
      </div>
    </div>
  );
}