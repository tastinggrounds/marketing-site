/* eslint-disable */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import TopList from '../../components/TopList/TopList';
import PieChart from '../../components/PieChart/PieChart';
import Histogram from '../../components/Histogram/Histogram';
import DownloadButtons from '../../components/DownloadButtons/DownloadButtons';

import HomeButton from '../../components/HomeButton/HomeButton';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './YearInReviewScreen.css';

import { 
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  HashNavigation,
} from 'swiper/modules';

import MostBrewedCoffeesDistinct from './MostBrewedCoffeesDistinct.json';
import MostBrewedCoffees from './MostBrewedCoffees.json';
import MostSavedToListsCoffees from './MostSavedToListsCoffees.json';
import MostBrewedRoastersDistinct from './MostBrewedRoastersDistinct.json';
import MostBrewedRoasters from './MostBrewedRoasters.json';
import RatingData from './RatingData.json';
import HighestRatedRoasters from './HighestRatedRoasters.json';
import HighestRatedCoffees from './HighestRatedCoffees.json';
import MostBrewedOrigins from './MostBrewedOrigins.json';
import HighestRatedOrigins from './HighestRatedOrigins.json';
import MostBrewedVarieties from './MostBrewedVarieties.json';
import HighestRatedVarieties from './HighestRatedVarieties.json';
import MostUsedBrewMethods from './MostUsedBrewMethods.json';
import HighestRatedBrewMethods from './HighestRatedBrewMethods.json';
import MostTastedFlavors from './MostTastedFlavors.json';

export default function YearInReviewScreen() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>2023 Year In Review | Tasting Grounds</title>
          <meta
            name="description"
            content="2023 Year In Review for the Tasting Grounds coffee community!"
          />
          <link rel="canonical" href="https://tastinggrounds.com/2023" />
        </Helmet>
      </HelmetProvider>
      <Swiper
        direction={'vertical'}
        navigation={true}
        mousewheel={true}
        keyboard={true}
        hashNavigation={{
          enabled: true,
          watchState: true,
        }}
        modules={[
          Navigation,
          Pagination,
          Mousewheel,
          Keyboard,
          HashNavigation,
        ]}
        pagination={{type: 'progressbar'}}
      >
        {/* INTRO SLIDES */}
        <SwiperSlide data-hash='year-in-review' className='intro-slides'>
          <div className='slide-content'>
            <h1>2023<br />Year In Coffee Brews</h1>
            <img className='year-review-image' src={`https://production.cdntg.xyz/assets/marketing-site/2023/year-in-review-image-no-table.png`} alt='year in review' />
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash='the-basics' className='intro-slides'>
          <div className='slide-content'>
            <p className='content-heading-text'>
              we <span className='highlight'>brew</span>ed a lot of <span className="highlight">coffee together</span>
            </p>
            <div className='stats-row'>
              <p>
                <span className='highlight mint'>1k</span><br />brewers
              </p>
              <p>
                <span className='highlight mint'>5.5k</span><br />brews
              </p>
              <p>
                <span className='highlight mint'>4.6k</span><br />interactions
              </p>
            </div>
            <p className='content-heading-text'>
              our catalog grew with the community
            </p>
            <div className='stats-row'>
              <p>
                <span className='highlight mint'>3k</span><br />coffees added
              </p>
              <p>
                <span className='highlight mint'>1k</span><br />roasters added
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide data-hash='table-of-contents' className='intro-slides'>
          <div className='slide-content'>
            <p className='mint'>Categories</p>
            <span className='content-heading-text'>
              <a href='#coffees'><h2><li>Coffees</li></h2></a>
              <a href='#roasters'><h2><li>Roasters</li></h2></a>
              <a href='#brews'><h2><li>Brews</li></h2></a>
            </span>
          </div>
        </SwiperSlide>
        {/* INTRO SLIDES */}
        {/* COFFEE SLIDES */}
        <SwiperSlide className='coffee-slides' data-hash='coffees'>
          <h2>Coffee Stuff</h2>
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-coffees-distinct'>
          <TopList title='Most Brewed Coffees' subtitle='With Brews by Distinct Users' items={MostBrewedCoffeesDistinct} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-coffees'>
          <TopList title='Most Brewed Coffees' subtitle='Overall' items={MostBrewedCoffees} alignment={'right'} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-saved-coffees'>
          <TopList title="Most Saved To Lists" subtitle='All Time' items={MostSavedToListsCoffees} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='highest-rated-coffees'>
          <TopList title="Highest Average Rated Coffees" subtitle='minimum 5 brews and distinct users' items={HighestRatedCoffees} alignment={'right'} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-origins'>
          <div className='slide-content'>
            <Histogram title="Most Brewed Origins" data={MostBrewedOrigins} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='highest-rated-origins'>
          <div className='slide-content'>
            <Histogram title="Highest Average Rated Origins" subtitle="brewed by at least 10 distinct users" data={HighestRatedOrigins} showValue={true}/>
          </div>
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-varieties'>
          <div className='slide-content'>
            <Histogram title="Most Brewed Varieties" data={MostBrewedVarieties} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='highest-rated-varieties'>
          <div className='slide-content'>
            <Histogram title="Highest Average Rated Varieties" data={HighestRatedVarieties} showValue={true} />
          </div>
        </SwiperSlide>
        {/* COFFEE SLIDES */}
        {/* ROASTERS SLIDES */}
        <SwiperSlide className='roaster-slides' data-hash='roasters'>
          <h2>Roaster Stuff</h2>
        </SwiperSlide>
        <SwiperSlide className='roaster-slides' data-hash='most-brewed-roasters-distinct'>
          <TopList title="Most Brewed Roasters" subtitle='With Brews by Distinct Users' items={MostBrewedRoastersDistinct} />
        </SwiperSlide>
        <SwiperSlide className='roaster-slides' data-hash='most-brewed-roasters'>
          <TopList title="Most Brewed Roasters" subtitle='all brews' items={MostBrewedRoasters} alignment={'right'} />
        </SwiperSlide>
        <SwiperSlide className='roaster-slides' data-hash='highest-rated-roasters'>
          <TopList title="Highest Average Rated Roasters" subtitle='minimum 5 brews and distinct users' items={HighestRatedRoasters} />
        </SwiperSlide>
        {/* ROASTERS SLIDES */}
        {/* BREWS SLIDES */}
        <SwiperSlide className='brew-slides' data-hash='brews'>
          <h2>Brews Stuff</h2>
        </SwiperSlide>
        <SwiperSlide className='brew-slides' data-hash='brew-ratings'>
          <div className='slide-content'>
            <h2>Brew Rating Distribution</h2>
            <br />
            <PieChart data={RatingData} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='brew-slides' data-hash='most-used-brew-methods'>
          <div className='slide-content'>
            <Histogram title="Most Used Brew Methods" data={MostUsedBrewMethods} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='brew-slides' data-hash='highest-rated-brew-methods'>
          <div className='slide-content'>
            <Histogram title="Highest Rated Brew Methods" subtitle='minimum 10 brews and distinct users' data={HighestRatedBrewMethods} showValue={true} />
          </div>
        </SwiperSlide>
        <SwiperSlide className='brew-slides' data-hash='most-tasted-flavors'>
          <div className='slide-content'>
            <Histogram title="Most Tasted Flavor Notes" data={MostTastedFlavors} />
          </div>
        </SwiperSlide>
        {/* BREWS SLIDES */}
        <SwiperSlide className='intro-slides' data-hash='see-you-in-2024'>
          <div className='slide-content'>
            <h1>Here's to 2024!</h1>
            <DownloadButtons />
            <p className='mint'>#brewcoffeetogether</p> 
          </div>
        </SwiperSlide>
      </Swiper>
      <div className='app-icon'>
        {/* internal link caused weirdness, don't feel like dealing with it */}
        <a href="https://tastinggrounds.com">
          <HomeButton useAltIcon={true} />
        </a>
      </div>
    </>
  );
}
