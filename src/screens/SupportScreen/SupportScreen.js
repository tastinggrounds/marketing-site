import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Heading, DownloadButtons } from '../../components';

import './SupportScreen.css';

/* eslint-disable react/jsx-no-target-blank */

export default function SupportScreen() {
  return (
    <HelmetProvider>
      <div className="SupportScreenContainer">
        <Helmet>
          <title>Support Us | Tasting Grounds</title>
          <meta
            name="description"
            content="Tasting Grounds is a bootstrapped operation. We love doing what we do, but we need your help to keep it going. Coffee is our passion and we are committed to building a community without riddling it wih ads."
          />
          <link rel="canonical" href="https://tastinggrounds.com/support-us" />
        </Helmet>
        <Heading size={Heading.SIZES.LARGE}>Support Us</Heading>
        <div className="SupportScreenBodyContainer">
          <div className="SupportScreenBodyTextContainer">
            <p>
              We are so grateful for every person that participates in the specialty
              coffee community that we are working to build. Seeing our vision in action
              with each user of the app is so exciting for us. Every brew that you share
              encourages us to keep going!
            </p>
            <p>
              Tasting Grounds is a bootstrapped operation, so any support you give will
              be going directly into running the service. Thanks for helping us grow and
              being a member of this community! ☕️
            </p>
          </div>
          <p className="Hashtag">
            <b>
              <a href="https://www.instagram.com/explore/tags/brewcoffeetogether" target="_blank" rel="noopener noreferrer">#brewcoffeetogether</a>
            </b>
          </p>
          <Heading size={Heading.SIZES.SMALL}>Ways to Support</Heading>
          <div className="BmacContainer">
            Give one time or setup a reoccuring monthly donation. We plan to setup a
            subscribers program in the future and promise we&apos;ll give you some cool perks then!
            <br />
            <br />
            <a href="https://www.buymeacoffee.com/tastinggrounds" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Us A Coffee" />
            </a>
          </div>
          <div className="AffiliateContainer">
            Buy your coffee gear using one of our affiliate links. We&apos;ll get a small
            commission from your purchase and you&apos;ll be paying the same price!
          </div>
          <div className="AffliateLinksContainer">
            <a href="https://www.prima-coffee.com?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">
              <img
                className="AffiliatePhoto"
                src="https://production.cdntg.xyz/assets/marketing-site/support-us/prima-coffee.png"
                alt="Prima Coffee Logo"
              />
            </a>
            <a href="https://fellow.sjv.io/Ao7Gjo" target="_blank" rel="nofollow">
              <img
                className="AffiliatePhoto"
                src="https://production.cdntg.xyz/assets/marketing-site/support-us/fellow-products.webp"
                alt="Fellow Products Logo"
              />
            </a>
          </div>
          <br />
          🥲 Thanks for much for your support!
        </div>
        <DownloadButtons />
      </div>
    </HelmetProvider>
  );
}
