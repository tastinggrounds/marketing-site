import React from 'react';
import Helmet from 'react-helmet';

import { Heading } from '../../../components';

import { Link } from 'react-router-dom';

import './DetailScreens.css';

export default function OurStoryScreen() {
  return (
    <div className="AboutDetailScreensContainer">
      <Helmet>
        <title>Tasting Grounds | Origin Story of the Tasting Grounds coffee app</title>
        <meta 
          name="description" 
          content="The origin story of Tasting Grounds. The iOS and Android coffee app for logging & tracking your brew process, discovering new coffees & roasters, and sharing with your friends & the community." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>Tasting Grounds Origin Story</Heading>
      <div className="AboutDetailSceensBodyContainer">
        <p>In the descent from a coffee lover into a coffee-obsessed maniac, I started collecting a stack of coffee bags and scribbling difficult to read notes about each of my brews. When talking coffee with my friends, we’d often ask each other what we’d been drinking recently, how we had brewed it, and what flavors the coffee reminded us of. We were all in the pursuit of brewing and drinking the best coffee we possibly could. It was clear that life would be better if we could do all of this in one place.</p>
        <figure className="AlignCenter">
          <img 
            className="CoffeeBagsImage" 
            src={require("./coffee-bags.png")} 
            alt="coffee bags" 
          />
            <figcaption>
              <em>A small piece of my weird coffee bag collection.</em>
            </figcaption>
        </figure>
        <p>I downloaded countless coffee apps in an attempt to solve this problem. Some nailed certain aspects of what I was looking for, some checked a few boxes but did so poorly, and others were simply so buggy that they were unusable. I pitched the idea to the best software engineer I knew (Patrick) and thus Tasting Grounds was born.</p>
        <p>We are aiming to build a community for coffee beginners, aficionados, and experts to brew coffee together. With Tasting Grounds, you can log and rate your brews and tasting notes, explore what coffees other members of the community are drinking and what they are tasting, interact with your friends about their brews, and discover new roasters to love. We have many more features in the works to connect you more with the coffee community and to help you learn more about coffees, roasting, and brewing.</p>
        <figure className="AlignCenter">
          <img 
            className="AppProfileImage" 
            src={require("./app-profile.png")} 
            alt="app profile" 
          />
            <figcaption>
              <em>My much-improved coffee inventory, shared with my friends </em>😊
            </figcaption>
        </figure>
        <p>We hope you love using Tasting Grounds as much as we do. Don’t forget to <Link to="/contact">share your feedback with us</Link> and rate & review Tasting Grounds on your app store to help shape the future of the community! ✨</p>
        <p>- Peter</p> 
        <em>Note, I originally wrote published this on <a href="https://citizenscoffee.co/brew-coffee-together-introducing-tasting-grounds/">our good friends blog</a>. Edits have been made for context. </em>🤙
        <p></p>
      </div>
    </div>
  );
}
