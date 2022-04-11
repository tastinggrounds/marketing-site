import React from 'react';
import { Helmet } from 'react-helmet';

import { Link } from 'react-router-dom';
import { Heading, DownloadButtons } from '../../../components';

import './LearnContentScreens.css';

export default function TastingNotesScreen() {
  return (
    <div className="LearnContentScreensContainer">
      <Helmet>
        <title>Guide to Coffee Flavor Profiles | Tasting Grounds</title>
        <meta
          name="description"
          content="The Tasting Grounds coffee app guide to coffee flavor profiles - how to describe coffee flavors and understand the flavor notes your roasters use on their coffee bags"
        />
      </Helmet>
      <Heading size={Heading.SIZES.LARGE}>Guide to Coffee Flavor Profiles</Heading>
      <div className="LearnContentSceensBodyContainer">
        <p>Ginger? Pineapple?? Bubblegum??? Skittles????</p>
        <p>
          We have seen some pretty wild flavor descriptors on some
          coffees recently and know that’s left a lot of people,
          especially those new to the specialty coffee world, wondering
          - flavors like that must have been added to the coffee, right?
          Coffee tastes like coffee, not like fruit or candy, right? WRONG, kind of.
        </p>
        <p>
          There are many factors that contribute to the way that a coffee tastes,
          all of which we have worked to highlight at various points in the Tasting
          Grounds app. A coffee’s variety, origin, growing altitude, processing
          method, roast level, brewing method, brewing water, grind size, and more
          will all factor into the flavors of a coffee. But equally as important,
          if not more important, as those factors, is you. Your experiences with
          different tastes are going to have an enormous impact on the flavors that you perceive.
        </p>
        <p>
          We think you should ask yourself this when it comes to flavor profile descriptors -&nbsp;
          <b><em>what does this coffee remind you of?</em></b>
        </p>
        <div className="AlignCenter">
          <img
            className="FlavorProfileImage"
            src="https://production.cdntg.xyz/assets/marketing-site/flavor-wheel.webp"
            alt="coffee flavor wheel"
          />
        </div>
        <p>
          Flavor is a combination of what you are tasting and smelling - so don’t
          discount the impact aromatics have on the flavors a coffee may remind of you.
          Check out our&nbsp;
          <Link to="/learn/tasting-notes">Guide to Tasting Notes</Link>
          &nbsp;if you haven’t already for some factors to consider in how you perceive flavor.
        </p>
        <p>
          Referencing a flavor wheel can be helpful when trying to describe what you are tasting.
          The flavor descriptors available on Tasting Grounds are roughly based on&nbsp;
          <a href="https://counterculturecoffee.com/learn/resource-center/coffee-tasters-flavor-wheel" target="_blank" rel="noopener noreferrer">Counter Culture’s Flavor Wheel</a>
          . We referenced this wheel as it represents many common flavors you will hear people use
          when describing coffee. To use the wheel, work from the center out to narrow down a
          specific flavor note.
        </p>
        <p>
          Do not get discouraged if you can’t taste the same flavor profiles as those that
          the roaster puts on the bag! Everyone’s tastes are unique so the notes on the bag
          are only the reflection of what the roaster has experienced or the story they are trying
          to tell with the coffee.
        </p>
        <p>
          If you find yourself struggling to pick out flavors after considering what you
          are reminded of, we’d definitely encourage you to try anything and everything to
          familiarize yourself with more flavors! Go grab one of each fruit at the store,
          especially the ones you’ve never seen or tried before. You can’t be reminded of a
          flavor you’ve never tasted before!
        </p>
      </div>
      <DownloadButtons />
    </div>
  );
}
