import React from 'react';
import Helmet from 'react-helmet';

import { Heading, DownloadButtons } from '../../../components';

import './LearnContentScreens.css';

export default function InformationStandardsScreen() {
  return (
    <div className="LearnContentScreensContainer">
      <Helmet>
        <title>Guide to Coffee & Roaster Information | Tasting Grounds</title>
        <meta 
          name="description" 
          content="The guidelines used by Tasting Grounds for verifying coffee and roasters information created by community users of the app." 
        />
      </Helmet>
      <Heading size={Heading.SIZES.XXLARGE}>Guide to Coffee & Roaster Information</Heading>
      <div className="LearnContentSceensBodyContainer">
        <p>The Tasting Grounds team reviews and verifies all roasters and coffees that are added by members of the community. It is best and most helpful if you can enter as much information as accurately as possible, but do not worry if you don’t have all of the information handy.</p>
        <p>A few things to keep in mind when creating roasters and coffees:</p>
          <ul>
            <li>There are many roasters with similar names, so including either location or the website URL ensures that we can verify the roaster correctly.</li>
            <li>There are certain details that we don’t make available when creating coffees and roasters. We will always fill these in ourselves, when the information is verifiable. Fields include descriptions, images, purchase URLs, etc.</li>
            <li>We may modify or remove details entered if we find inaccuracies or cannot verify the information. This may include the names of coffees which are displayed in your brews (however we are not modifying any details of your brew).</li>
            <li>Coffee names can be a tricky field, especially when it comes to single origin coffees that roasters often name based on their origins. Some standards we follow when naming:</li>
              <ul>
                <li>The main text of a coffee bag label - if it includes the origin or other details like the process, we will include it in the name field (it my be necessary to distinguish between a washed and naturally processed coffee of the same name).</li>
                <li>The main label given to a coffee on the roaster’s website.</li>
                <li>If the bag and website do not match exactly, we will favor the name on the bag.</li>
              </ul>
            <li>We don’t support every flavor note that you’re going to see roasters use or that you might think of when tasting. 
              Our flavor selections are based on the <a href="https://counterculturecoffee.com/learn/resource-center/coffee-tasters-flavor-wheel" target="_blank" rel="noopener noreferrer">Counter Culture flavor wheel</a>. We use this as it is well known and a fairly comprehensive wheel of flavors people are reminded of and we want to work off a common baseline.
              When you are reminded of a very specific taste in a coffee you brew, we recommend you mention it in the comment of your brew!
              If a flavor is referenced by the roaster that we do not have:</li>
              <ul>
                <li>We may select the closed similar flavor(s).</li>
                <li>We may exclude the flavor note all together.</li>
              </ul>
          </ul>
        <p>Have you found something inaccurate in our catalog, are we missing an option in any field that you want to see, or are you a roaster that wants to enter your own information? Reach out to us at <a href="mailto:hey@tastinggrounds.com" target="_blank" rel="noopener noreferrer">hey@tastinggrounds.com</a>!</p>
      </div>
      <DownloadButtons />
    </div>
  );
}
