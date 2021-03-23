import React from 'react';
import { Helmet } from 'react-helmet';

import { Heading } from '../../../components';

import './LearnContentScreens.css';

export default function GrindSizesScreen() {
  return (
    <div className="LearnContentScreensContainer">
      <Helmet>
        <title>Guide to Coffee Grind Sizes | Tasting Grounds</title>
        <meta 
          name="description" 
          content="The Tasting Grounds coffee app guidelines for coffee grind sizes based on the brew method and recommended settings for Comandante C40, Timemore Chestnut, Fellow Ode, and Baratz Encore grinders." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>Guide to Coffee Grind Sizes</Heading>
      <div className="LearnContentSceensBodyContainer">
        <p>Grind size is one of the most important and easily-adjustable characteristics of your brew process.</p>
        <div className="AlignCenter">
          <img
            className="GrindSizeIcon" 
            src={require("./Assets/grind-size-icon.png")} 
            alt="grind size icon" 
          />
        </div>
        <p>The primary impact grind size has on your brew is the surface area of the coffee grounds which the water will be in contact with. A finer grind has a larger total surface area and will extract the coffee faster while a coarser grind will have a smaller surface area and will extract slower.</p>
        <p>A secondary impact grind size has on your brew, particularly with percolation brewing methods (like a pour over or drip), is resistance as the water flows through the grounds. A finer grind will slow the flow rate of the water and increase the level of extraction while a coarser will have a faster flow rate and a less extraction.</p>
        <p>Striking the right balance of surface area and resistance will make a huge difference in your resulting cup. When it comes to tracking your grind size in Tasting Grounds, it is difficult to account for the different settings on the many different grinders out there in a way that is useful to you and your friends in the community. That’s why we’ve set up seven categories of grind size. Here are some general guidelines to follow for those categories:</p>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-very-fine.png"
            alt="very fine grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Very Fine</Heading>
        <p>A very fine grind is pretty similar in texture to flour.</p>
        <p><b>THINK:</b> Turkish Coffee</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 5-10 clicks</li>
          <li>Timemore Chestnut: 0-6 (not recommended)</li>
          <li>Fellow Ode: probably should try a different grinder</li>
          <li>Baratza Encore: 1-5</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-fine.png"
            alt="fine grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Fine</Heading>
        <p>A fine grind is going to be something like powdered sugar - not quite as coarse as sugar but not as fine as flour.</p>
        <p><b>THINK:</b> Espresso or Moka Pot</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 11-15</li>
          <li>Timemore Chestnut: 7-10</li>
          <li>Fellow Ode: 1-2</li>
          <li>Baratza Encore: 5-10</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-medium-fine.png"
            alt="medium-fine grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Medium-Fine</Heading>
        {/* eslint-disable-next-line */}
        <p>A medium-fine grind is...well it’s somewhere between the medium and fine examples (if someone can think of a good one let us know 🙃).</p>
        <p><b>THINK:</b> Single serving pour over brewers</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 16-20</li>
          <li>Timemore Chestnut: 11-15</li>
          <li>Fellow Ode: 2-3</li>
          <li>Baratza Encore: 10-15</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-medium.png" 
            alt="medium grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Medium</Heading>
        <p>A medium grind is slightly finer than table salt or close to dry sand.</p>
        <p><b>THINK:</b> Aeropress, Siphon, Flat-bottom (Kalita Wave) or Cone-shaped (Hario V60) brewers</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 21-25</li>
          <li>Timemore Chestnut: 16-20</li>
          <li>Fellow Ode: 3-5</li>
          <li>Baratza Encore: 10-20</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-medium-coarse.png" 
            alt="medium-coarse grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Medium-Coarse</Heading>
        <p>A medium-coarse grind is somewhat gritty like a rough sand.</p>
        <p><b>THINK:</b> Chemex or Clever Dripper</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 26-30</li>
          <li>Timemore Chestnut: 21-23</li>
          <li>Fellow Ode: 5-6</li>
          <li>Baratza Encore: 20-25</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-coarse.png" 
            alt="coarse grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Coarse</Heading>
        <p>A coarse grind is the consistency of kosher salt.</p>
        <p><b>THINK:</b> French Press</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 31-35</li>
          <li>Timemore Chestnut: 24-28</li>
          <li>Fellow Ode: 6-9</li>
          <li>Baratza Encore: 25-30</li>
        </ul>
        <br />
        <div className="AlignCenter">
          <img
            className="GrindSizeImages" 
            src="https://production.cdntg.xyz/assets/learning/grind-size-very-coarse.png" 
            alt="very coarse grind size" 
          />
        </div>
        <Heading size={Heading.SIZES.SMALL}>Very Coarse</Heading>
        <p>A very coarse grind is basically tiny pebbles...kidding! it is about the size of sea salt particles.</p>
        <p><b>THINK:</b> Cold Brew</p>
        <p><b>Approximate Settings</b></p>
        <ul>
          <li>Comandante C40: 36+</li>
          <li>Timemore Chestnut: 29+</li>
          <li>Fellow Ode: 9-11</li>
          <li>Baratza Encore: 30-40</li>
        </ul>
      </div>
    </div>
  );
}
