/* eslint-disable */
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import TopList from '../../components/TopList/TopList';
import PieChart from '../../components/PieChart/PieChart';
import Histogram from '../../components/Histogram/Histogram';

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

export default function YearInReviewScreen() {
  const coffeeData = [
    { name: "ET", value: 746 },
    { name: "CO", value: 743 },
    { name: "BR", value: 305 },
    { name: "KE", value: 216 },
    { name: "GT", value: 166 }
  ];
  
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>2023 Year In Review | Tasting Grounds</title>
          <meta
            name="description"
            content="2023 Year In Review for the Tasting Grounds coffee communnity. See how many brews were logged, how many coffees were discovered, and more!"
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
            <img className='year-review-image' src={`${process.env.PUBLIC_URL}/assets/year-in-review-image-no-table.png`} alt='year in review' />
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
              <a href="#most-brewed-coffees"><li>Most Brewed Coffees</li></a>
              <li>Most Brewed Origins</li>
              <li>Highest Rated Origins</li>
              <li>Highest Rated Varieties</li>
              <li>Most Brewed Roasters</li>
              <li>Most Brewed Roasters by Location</li>
              <li></li>
            </span>
          </div>
        </SwiperSlide>
        {/* INTRO SLIDES */}
        {/* COFFEE SLIDES */}
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-coffees-distinct'>
          <TopList title='Most Brewed Coffees' subtitle='With Brews by Distinct Users' items={MostBrewedCoffeesDistinct} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-brewed-coffees'>
          <TopList title='Most Brewed Coffees' subtitle='Overall' items={MostBrewedCoffees} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides' data-hash='most-saved-coffees'>
          <TopList title="Most Saved To Lists" subtitle='All Time' items={MostSavedToListsCoffees} />
        </SwiperSlide>
        <SwiperSlide className='coffee-slides'>
          <div className='slide-content'>
            <h2>Top 5 Coffee Origins</h2>
            <br />
            <Histogram data={coffeeData} />
          </div>
        </SwiperSlide>
        {/* COFFEE SLIDES */}
        {/* ROASTERS SLIDES */}
        <SwiperSlide className='roaster-slides' data-hash='most-brewed-roasters-distinct'>
          <TopList title="Most Brewed Roasters" subtitle='With Brews by Distinct Users' items={MostBrewedRoastersDistinct} />
        </SwiperSlide>
        <SwiperSlide className='roaster-slides' data-hash='most-brewed-roasters'>
          <TopList title="Most Brewed Roasters" subtitle='Overall' items={MostBrewedRoasters} />
        </SwiperSlide>
        {/* ROASTERS SLIDES */}
        {/* BREWS SLIDES */}
        <SwiperSlide className='brew-slides' data-hash='brew-ratings'>
          <div className='slide-content'>
            <h2>Brew Rating Distribution</h2>
            <br />
            <PieChart data={RatingData} />
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        {/* BREWS SLIDES */}
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
