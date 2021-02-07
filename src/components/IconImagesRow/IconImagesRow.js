import React from 'react';

import './IconImagesRow.css';

export default function IconImagesRow() {
  return (
    <div className="IconsImagesContainer">
        <img 
            className="CoffeesCirlceImage" 
            src="assets/coffee-circle.png"
            alt="tasting grounds coffee icon" 
        />
        <img 
            className="RoastersCirlceImage" 
            src="assets/roaster-circle.png" 
            alt="tasting grounds roaster icon" 
        />
        <img 
            className="UsersCirlceImage" 
            src="assets/user-circle.png"
            alt="tasting grounds user icon" 
        />
    </div>
  );
}
