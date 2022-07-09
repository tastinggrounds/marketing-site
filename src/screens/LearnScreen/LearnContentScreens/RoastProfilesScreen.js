import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import { Heading, DownloadButtons } from '../../../components';

import './LearnContentScreens.css';

/* eslint-disable react/jsx-no-target-blank */

export default function RoastProfilesScreen() {
  return (
    <HelmetProvider>
      <div className="LearnContentScreensContainer">
        <Helmet>
          <title>Guide to Coffee Roast Profiles | Tasting Grounds</title>
          <meta
            name="description"
            content="The Tasting Grounds guide to coffee roast profiles or levels and the impact of roast on the freshness, your brew process, and flavor of coffee. Includes tips fo frenshness, grind size, and water temperature for dark, medium, and light roasted coffees."
          />
          <link rel="canonical" href="https://tastinggrounds.com/learn/roast-profiles" />
        </Helmet>
        <br />
        <Heading size={Heading.SIZES.LARGE}>Guide to Coffee Roast Profiles</Heading>
        <div className="LearnContentSceensBodyContainer">
          <p>
            Roast profiles have a bit of a reputation when it comes to coffee.
            There are coffee drinkers who feel strongly that specialty coffee can
            only be a light roast coffee or that espresso is meant for dark roasts.
            The truth is that there are excellent coffees roasted across the spectrum
            and understanding the impact roast levels have on coffee and what you can
            do to your brew of coffees at different levels will help you to bring out
            the qualities you love most in your coffees.
          </p>
          <Heading size={Heading.SIZES.SMALL}>Basics of Coffee Roasting</Heading>
          <p>
            Before you can understand the different roast levels, you need a basic understanding
            of how coffee is roasted. Roasters purchase green coffee beans that have been grown
            and processed from coffee farmers and producers throughout the coffee belt of the world.
            Green coffee beans are very dense, smell a bit grassy or vegetal, and don&apos;t have
            appealing flavor qualities. It is the roasting of the beans that pulls out the
            fragrance, aromas, and flavor that we love about coffee. The roasting process - in
            addition to the type of bean, origin, processing method, etc. - plays a massive role
            in the experience you will have drinking a coffee.
          </p>
          <p>
            Roasters build roast profiles, or recipes, adjusted highlight qualities in the beans
            they are roasting. Roasting machines heat green coffee beans at a high temperature and
            keep the beans moving throughout the entire roast process to ensure evenness in the
            roast level for all beans. Roasters measure the heat, speed, and airflow in the roaster
            in order to manipulate the roast level and flavor. Moisture is released from the beans
            and the green color of the beans slowly fades to brown as the beans get hot. At a
            certain point, the beans will audibly crack (something which they will do once more)
            which is commonly referred to as &quot;first crack&quot;. Shortly after the first
            crack is a common point to remove the beans from the heat of the roaster for lighter
            roasted coffees. Darker roasts may go all the way to the next crack, which you could
            probably guess is referred to as &quot;second crack&quot;. Going much beyond the second
            crack of the roasting process can become close to burning the coffee beans.
          </p>
          <Heading size={Heading.SIZES.SMALL}>Roast Labels</Heading>
          <p>
            You might have noticed that there are several different ways that roasters will label
            a coffee&apos;s roast. The importance of any of these labels are really what the
            roasters want to convey of the coffee to you as a coffee drinker. The image below
            aligns some common descriptors with approximate &quot;standard&quot; roast levels.
          </p>
          <div className="AlignCenter">
            <img
              className="BannerImage"
              src="https://production.cdntg.xyz/assets/marketing-site/learn/roast-profiles/roast-profiles.webp"
              alt="coffee beans at each roast profile with descriptors"
            />
            <figcaption>
              <em className="ImageText">
                Common descriptors for approximate roast profiles.
                <br />
                Original photo by&nbsp;
                <a href="https://unsplash.com/@chiklad?">
                  Ochir-Erdene Oyunmedeg.
                </a>
              </em>
            </figcaption>
            <br />
          </div>
          <Heading size={Heading.SIZES.SMALL}>Brewing Tips</Heading>
          <p>
            Brewing a light vs. a dark roasted coffee won&apos;t be wildly different; however, you
            might want to follow some of these guidelines when brewing one or the other.
          </p>
          <p className="AlignCenter">
            <em className="AffiliateText">
              Links in this article may contain affiliate links that help support
              Tasting Grounds.
            </em>
          </p>
          <Heading size={Heading.SIZES.XSMALL}>Freshness</Heading>
          <p>
            The freshness of your beans matters, but can beans be&nbsp;
            <em>too</em>
            &nbsp;fresh? They kind of can. After completing the roasting process, coffee
            beans are still full of CO2. Roaster&apos;s let beans go through a degassing
            process by letting them rest for a couple of days before grinding and
            brewing. The degassing process lets some of that CO2 escape the beans which
            helps prevent the gas from causing uneven extraction.
          </p>
          <div className="AlignCenter">
            <img
              className="Image"
              src="https://production.cdntg.xyz/assets/marketing-site/learn/roast-profiles/freshness.webp"
              alt="Fresh bag of coffee beans"
            />
            <figcaption>
              <em className="ImageText">
                Ah, the lovely fragrance of a fresh bag of coffee beans.
              </em>
            </figcaption>
          </div>
          <p>
            Because lighter roasts go through a shorter roasting process, the beans are
            more intact and degassing will take longer while darker roasters will degass
            more quickly. The ideal degassing period is somewhere around 24-72 hours across
            roast levels.
          </p>
          <p>
            This may also say something about how long a lighter vs. a darker roast may stay
            &quot;fresh&quot;, but there are many other environmental factors that are in play.
            Generally speaking, you may find that light roasts keep their freshness a bit longer.
          </p>
          <Heading size={Heading.SIZES.XSMALL}>Grind Size</Heading>
          <p>
            If you use a hand grinder, you may notice that darker roasted beans have a much softer
            feel to them and you can bust through the grind much quicker. This is because they were
            broken down more during the roasting process and more gas was released as compared to a
            light roast.
          </p>
          <p>
            Lighter beans are much less porous and solid which means that you need to break them
            down more in the grind and a finer grind size will be needed to extract flavor from the
            beans.
          </p>
          <div className="AlignCenter">
            <img
              className="Image"
              src="https://production.cdntg.xyz/assets/marketing-site/learn/roast-profiles/grinder.webp"
              alt="Fellow Ode coffee grinder"
            />
            <figcaption>
              <em className="ImageText">
                Dial in grind size with the&nbsp;
                <a href="https://fellowproducts.com/products/ode-brew-grinder?rfsn=5706149.a8bdbd&utm_source=refersion&utm_medium=affiliate&utm_campaign=5706149.a8bdbd" target="_blank" rel="nofollow">Fellow Ode</a>
                &nbsp;for any roast.
              </em>
            </figcaption>
          </div>
          <p>
            Check out our&nbsp;
            <Link to="/learn/grind-sizes">Guide to Grind Sizes</Link>
            &nbsp;and take the roast level into consideration when selecting the right size for
            your brew method.
          </p>
          <Heading size={Heading.SIZES.XSMALL}>Water Temperature</Heading>
          <p>
            Water temperature greatly impacts the solvency of the coffee grounds you are brewing.
            The hotter the water, the more solvent the grounds will be and the higher the
            extraction will be. Beans have less solubles the longer they are roasted, so the
            ideal temperature range will be impacted by the roast level. The Specialty Coffee
            Association (SCA) suggests the optimal brewing temperature to be between 195°F (90°C)
            and 205°F (96°C).
          </p>
          <div className="AlignCenter">
            <img
              className="Image"
              src="https://production.cdntg.xyz/assets/marketing-site/learn/roast-profiles/water-temperature.webp"
              alt="Fellow Stagg coffee kettle temperature control"
            />
            <figcaption>
              <em className="ImageText">
                The&nbsp;
                <a href="https://fellowproducts.com/collections/kettles?rfsn=5706149.a8bdbd&utm_source=refersion&utm_medium=affiliate&utm_campaign=5706149.a8bdbd" target="_blank" rel="nofollow">Fellow Stagg kettle</a>
                &nbsp;gives you precise temperature control.
              </em>
            </figcaption>
          </div>
          <p>
            As darker roasters have been roasted longer, they have less solubles and higher
            temperatures can lead to over-extraction and undesirable bitterness. Using a water
            temperature as low as 180°F (82°C) will help highlight the sweeter notes of the coffee.
          </p>
          <p>
            When it comes to lighter roasts, higher temperatures are better for exacting the
            flavors that haven&apos;t been broken down during roasting. Using a water temperature up
            to 208°F (98°C) can help produce a well balanced cup without overpowering acidity.
          </p>
        </div>
        <br />
        <DownloadButtons />
      </div>
    </HelmetProvider>
  );
}
