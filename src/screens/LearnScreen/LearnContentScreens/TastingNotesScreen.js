import React from 'react';
import { Helmet } from 'react-helmet';

import { Heading, DownloadButtons } from '../../../components';

import './LearnContentScreens.css';

const tastingNotesIcon = require('./Assets/tasting-notes-icon.png');

export default function TastingNotesScreen() {
  return (
    <div className="LearnContentScreensContainer">
      <Helmet>
        <title>Guide to Coffee Tasting Notes | Tasting Grounds</title>
        <meta
          name="description"
          content="The Tasting Grounds coffee app guide to coffee tasting notes - Aromatics (Fragrance/Armoa), Acidity, Body, Sweetness, and Aftertast - and how to score them when cupping or brewing."
        />
      </Helmet>
      <Heading size={Heading.SIZES.LARGE}>Guide to Coffee Tasting Notes</Heading>
      <div className="LearnContentSceensBodyContainer">
        <p>
          Expert coffee tasters score coffees by “cupping”&nbsp;
          <a href="https://sca.coffee/research/protocols-best-practices" target="_blank" rel="noopener noreferrer">following the protocols</a>
          &nbsp;put out by the Specialty Coffee Association (SCA). The&nbsp;
          <a href="https://store.sca.coffee/products/scaa-official-cupping-form?variant=14732977990" target="_blank" rel="noopener noreferrer">standard SCA cupping form</a>
          &nbsp;is used for recording tasting notes and scoring a common set of attributes used for
          evaluating the quality of a coffee.
        </p>
        <div className="AlignCenter">
          <img
            className="TastingNotesIcon"
            src={tastingNotesIcon}
            alt="tasting notes wheel"
          />
        </div>
        <p>
          For beginners - and even experienced coffee tasters that haven’t been trained on
          the SCA methodologies - tasting notes can be extremely confusing and intimidating.
          Acidity? Body? Sweetness? …it all tastes like coffee! Don’t sweat it. We’re going
          to explain a little bit about what you should be thinking about when it comes to
          different coffee tasting notes.
        </p>
        <p>
          In the Tasting Grounds app, we  give you five tasting characteristics to rate on
          a scale of 1-5 (at 0.5 increments). Why didn’t we mirror the SCA cupping form you
          ask? We hoped to create a good balance of simplicity for those who are less
          experienced and untrained, yet detailed enough for those who have tasted and scored
          many coffees.
        </p>
        <p>
          One important thing to keep in mind when using this scale is that you are NOT scoring
          “How (enter tasting note here) is this coffee?” - you are scoring the quality of the
          tasting notes. For example - there might have been a time that you’ve had a piece of
          cake that was just too sweet for you. You wouldn’t rate that a 5 on sweetness just because
          it was extremely sweet, you might rate it lower because it was unpleasantly sweet.
        </p>
        <p>
          If you still find yourself confused about how to identify these qualities in a coffee
          after reading this, we’d highly suggest you try cupping multiple coffees side-by-side.
          Comparing unique coffees will really help you pick apart the nuances in coffee
          characteristics.
        </p>
        <br />
        <Heading size={Heading.SIZES.SMALL}>Aromatics</Heading>
        <p>
          Aromatics include the&nbsp;
          <b>Fragrance</b>
          &nbsp;and the&nbsp;
          <b>Aroma</b>
          &nbsp;of a coffee.&nbsp;
          <b>Fragrance</b>
          &nbsp;is the smell of the ground coffee when still dry and&nbsp;
          <b>Aroma</b>
          &nbsp;is the smell of the coffee when infused with hot water.
          You can evaluate the fragrance by sniffing the grounds before pouring water onto the
          coffee. If you are cupping, there are two distinct phases where you can evaluate aroma.
          First, by sniffing the aromas released while breaking the crust and second, by sniffing
          the aromas released while the coffee steeps. If you aren’t cupping you might think of
          the first phase during the bloom and second as the next pour(s) - that all depends on
          your brew process. The rating you give should reflect the preference of each of the
          aromatic aspects of your coffee.
        </p>
        <br />
        <Heading size={Heading.SIZES.SMALL}>Body</Heading>
        <p>
          Body can be thought of as the “weight” of the coffee. You can perceive it best between
          your tongue and the roof of your mouth. You might often hear people talk about the
          “mouthfeel” when referring to the body of a coffee. Terms like watery, creamy, and buttery
          or light, full, and balanced when describing the body. A light body or a heavy body that
          is well suited to the coffee can each be considered pleasant and given a high score.
        </p>
        <br />
        <Heading size={Heading.SIZES.SMALL}>Acidity</Heading>
        <p>
          Acidity can be the hardest to understand and most contentious tasting note in coffee.
          The spectrum of acidity is best spanned from “brightness” to “sourness”. There are
          many types of acids that contribute to flavors in coffee. Some of the most common to
          think about are:
        </p>
        <ul>
          <li>
            <b>Acetic Acid</b>
            {' '}
            - will remind you of sour, fermenty flavors like vinegar. Typically this will be
            considered favorable in small amounts, but will be unpleasant when stronger
          </li>
          <li>
            <b>Citric Acid</b>
            &nbsp;- you can probably guess this one! It will remind of you citrus fruit notes
            and possibly sourness if it is very strong
          </li>
          <li>
            <b>Malic Acid</b>
            &nbsp;- will be quite similar to citric acid, but the most common reminder of malic
            acid is the crispness, juiciness, and sourness of a green apple
          </li>
          <li>
            <b>Phosphoric Acid</b>
            &nbsp;- will be more closely associated with the sweetness or creaminess of the coffee.
            You might be reminded of cola or the combination of sweet and tart you get from berries
            apple
          </li>
        </ul>
        <p>
          This is not a definitive list of acids that you’ll find in coffee, but it should give you
          some things to think about when evaluating acidity. Like with body, a high acidity coffee
          or a low acidity coffee can each be considered pleasant and given a high score.
        </p>
        <br />
        <Heading size={Heading.SIZES.SMALL}>Sweetness</Heading>
        <p>
          Sweetness can obviously refer to sweetness in the terms you are familiar with, but it
          can also be the result of the perception of a fullness of flavor. Something that may help
          when it comes to thinking of sweetness is the opposite notes of sour, astringent, vegetal
          notes. Sweetness comes from sugars, glycols, alcohols, and amino acids in coffee. As a
          basic rule of thumb, a fruiter sweetness might come through in lighter roasts while
          caramelier, chocolatier sweetness comes in darker roasts. Each type of sweetness can
          be enjoyable and the rating should reflect how pleasing it is to you.
        </p>
        <br />
        <Heading size={Heading.SIZES.SMALL}>Aftertaste</Heading>
        <p>
          Aftertaste is the length of positive taste and aroma of the coffee that remains on
          your palate after you’ve swallowed the coffee. You should think about how the flavors of
          the coffee linger. Typically, a shorter, unpleasant linger should get a lower score while
          a longer, positive linger should get a higher score for aftertaste.
        </p>
        <br />
      </div>
      <DownloadButtons />
    </div>
  );
}
