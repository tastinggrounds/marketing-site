import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Heading, DownloadButtons } from '../../../components';

import './LearnContentScreens.css';
import './css/GrindSizeScreen.css';

const grindSizeIcon = require('./Assets/grind-size-icon.png');

/* eslint-disable react/jsx-no-target-blank */

export default function GrindSizesScreen() {
  return (
    <HelmetProvider>
      <div className="LearnContentScreensContainer">
        <Helmet>
          <title>Guide to Coffee Grind Sizes | Tasting Grounds</title>
          <meta
            name="description"
            content="The Tasting Grounds coffee app guide to coffee grind sizes based on the brew method and recommended settings for Comandante C40, Timemore Chestnut, Fellow Ode, and Baratz Encore grinders."
          />
          <link rel="canonical" href="https://tastinggrounds.com/learn/grind-sizes" />
        </Helmet>
        <Heading size={Heading.SIZES.LARGE}>Guide to Coffee Grind Sizes</Heading>
        <div className="LearnContentSceensBodyContainer">
          <p>
            Grind size is one of the most important and easily-adjustable
            characteristics of your brew process.
          </p>
          <div className="AlignCenter">
            <img
              className="GrindSizeIcon"
              src={grindSizeIcon}
              alt="grind size icon"
            />
          </div>
          <p>
            The primary impact grind size has on your brew is the surface area of the coffee
            grounds which the water will be in contact with. A finer grind has a larger total
            surface area and will extract the coffee faster while a coarser grind will have a
            smaller surface area and will extract slower.
          </p>
          <p>
            A secondary impact grind size has on your brew, particularly with percolation brewing
            methods (like a pour over or drip), is resistance as the water flows through the
            grounds. A finer grind will slow the flow rate of the water and increase the level
            of extraction while a coarser will have a faster flow rate and a less extraction.
          </p>
          <p>
            Striking the right balance of surface area and resistance will make a huge difference
            in your resulting cup. When it comes to tracking your grind size in Tasting Grounds,
            it is difficult to account for the different settings on the many different grinders
            out there in a way that is useful to you and your friends in the community. That’s why
            we’ve set up seven categories of grind size. Here are some general guidelines to follow
            for those categories.
          </p>
          <br />
          <div className="AlignCenter">
            <img
              className="BannerImage"
              src="https://production.cdntg.xyz/assets/marketing-site/learn/grind-sizes/grind-sizes.webp"
              alt="ground coffee beans from size very fine to very coarse"
            />
          </div>
          <p className="AffiliateText">
            <em>
              Links to products in this article may contain affiliate links that help support
              Tasting Grounds.
            </em>
          </p>
          <br />
          <br />
          {/* start "Very Fine" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Very Fine</Heading>
              <p>A very fine grind is pretty similar in texture to flour.</p>
              <p>
                <b>THINK:&nbsp;</b>
                Turkish Coffee
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 5-10 clicks
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 0-6 (not recommended)
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : probably should try a different grinder
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 1-5
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-very-fine.png"
                alt="very fine grind size"
              />
            </div>
          </div>
          {/* end "Very Fine" size */}
          <br />
          {/* start "Fine" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Fine</Heading>
              <p>
                A fine grind is going to be something like powdered sugar - not quite
                as coarse as sugar but not as fine as flour.
              </p>
              <p>
                <b>THINK:&nbsp;</b>
                Espresso or Moka Pot
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 11-15
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 7-10
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 1-2
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 5-10
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-fine.png"
                alt="fine grind size"
              />
            </div>
          </div>
          {/* end "Fine" size */}
          <br />
          {/* start Medium-Fine" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Medium-Fine</Heading>
              <p>
                A medium-fine grind is...well it&apos;s somewhere between the medium and fine
                examples (if someone can think of a good one let us know 🙃).
              </p>
              <p>
                <b>THINK:&nbsp;</b>
                Single serving pour over brewers
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 16-20
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 11-15
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 2-3
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 10-15
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-medium-fine.png"
                alt="medium-fine grind size"
              />
            </div>
          </div>
          {/* end "Medium-Fine" size */}
          <br />
          {/* start "Medium" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Medium</Heading>
              <p>A medium grind is slightly finer than table salt or close to dry sand.</p>
              <p>
                <b>THINK:&nbsp;</b>
                Aeropress, Siphon, Flat-bottom (Kalita Wave) or Cone-shaped (Hario V60) brewers
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 21-25
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 16-20
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 3-5
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 10-20
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-medium.png"
                alt="medium grind size"
              />
            </div>
          </div>
          {/* end "Medium" size */}
          <br />
          {/* start "Medium-Coarse" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Medium-Coarse</Heading>
              <p>A medium-coarse grind is somewhat gritty like a rough sand.</p>
              <p>
                <b>THINK:&nbsp;</b>
                Chemex or Clever Dripper
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 26-30
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 21-23
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 5-6
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 20-25
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-medium-coarse.png"
                alt="medium-coarse grind size"
              />
            </div>
          </div>
          {/* end "Medium-Coarse" size */}
          <br />
          {/* start "Coarse" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Coarse</Heading>
              <p>A coarse grind is the consistency of kosher salt.</p>
              <p>
                <b>THINK:&nbsp;</b>
                French Press
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 31-35
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 24-28
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 6-9
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 25-30
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-coarse.png"
                alt="coarse grind size"
              />
            </div>
          </div>
          {/* end "Coarse" size */}
          <br />
          {/* start "Very Coarse" size */}
          <div className="GrindSizeContainer">
            <div className="GrindSizeTextContainer">
              <Heading size={Heading.SIZES.SMALL}>Very Coarse</Heading>
              <p>
                A very coarse grind is basically tiny pebbles...kidding!
                it is about the size of sea salt particles.
              </p>
              <p>
                <b>THINK:&nbsp;</b>
                Cold Brew
              </p>
              <p><b>Approximate Settings</b></p>
              <ul>
                <li>
                  <a href="https://prima-coffee.com/equipment/comandante/c40-mk4-coman-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Comandante C40</a>
                  : 36+
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/timemore/timemore-c2-max-timem-pp?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Timemore C2</a>
                  : 29+
                </li>
                <li>
                  <a href="https://fellow.sjv.io/0JNa0P" target="_blank" rel="nofollow">Fellow Ode</a>
                  : 9-11
                </li>
                <li>
                  <a href="https://prima-coffee.com/equipment/baratza/485?aff=75&utm_medium=affiliate" target="_blank" rel="nofollow">Baratza Encore</a>
                  : 30-40
                </li>
              </ul>
            </div>
            <div className="GrindSizeImageContainer">
              <img
                className="GrindSizeImages"
                src="https://production.cdntg.xyz/assets/learning/grind-size-very-coarse.png"
                alt="very coarse grind size"
              />
            </div>
          </div>
          {/* end "Very Coarse" size */}
          <br />
        </div>
      </div>
      <DownloadButtons />
    </HelmetProvider>
  );
}
