import React from 'react';

import './IconImagesRow.css';

export default function IconImagesRow() {
  return (
    <div className="IconsImagesContainer">
        <img 
            className="CoffeesCirlceImage" 
            src={ process.env.PUBLIC_URL +"/assets/coffee-circle.png" }
            alt="tasting grounds coffee icon" 
        />
        <img 
            className="RoastersCirlceImage" 
            src={ process.env.PUBLIC_URL + "/assets/roaster-circle.png" } 
            alt="tasting grounds roaster icon" 
        />
        <img 
            className="UsersCirlceImage" 
            src={process.env.PUBLIC_URL + "/assets/user-circle.png" }
            alt="tasting grounds user icon" 
        />
    </div>
  );
}
