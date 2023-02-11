import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Heading, DownloadButtons } from '../../components';

import './VarietiesScreen.css';

export default function VarietiesScreen() {
  const [staticData, setStaticData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getStaticData = async () => fetch('https://api.tastinggrounds.com/static')
    .then((response) => response.json())
    .then((data) => { setStaticData(data, setIsLoading(false)); });

  useEffect(() => {
    getStaticData();
  }, []);

  return (
    <HelmetProvider>
      <div className="SupportScreenContainer">
        <Helmet>
          <title>Coffee Varieties Catalog | Tasting Grounds</title>
          <meta
            name="description"
            content="Tasting Grounds Catalog of Coffee Varieites."
          />
          <link rel="canonical" href="https://tastinggrounds.com/varieties" />
        </Helmet>
        <Heading size={Heading.SIZES.LARGE}>Varieties</Heading>
        <div className="SupportScreenBodyContainer">
          <div className="SupportScreenBodyTextContainer">
            {(!isLoading) ? (
              staticData.varieties.map((variety, index) => index < 25 && (
                <div key={variety.id}>
                  <p>{variety.id}</p>
                  <p>{staticData.species[variety.speciesId]?.name}</p>
                  <p>{variety.name}</p>
                  <p>{variety.originCountry}</p>
                  <p>{variety.details}</p>
                </div>
              ))
            )
              : null}
          </div>
        </div>
        <DownloadButtons />
      </div>
    </HelmetProvider>
  );
}
