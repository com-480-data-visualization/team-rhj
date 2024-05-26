import React from "react";
import "../style/style.css";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <p className="intro-text">
        Welcome to <span className="welcomeText">ShopScopeUSA</span>! 
        <br></br>
        Dive into the dynamic world of U.S. e-commerce with Consumer Quest, your interactive portal to discovering 
        the latest shopping trends across the nation. Our website brings consumer data to life, offering a vivid exploration 
        of how different states engage with online shopping. From age demographics to spending habits, we map it all out, 
        providing you with a color-coded journey through America's e-commerce landscape.
        <br></br>
        Navigate our multi-layered maps to uncover regional shopping preferences, or delve into our 
        detailed dashboards that break down consumer behaviors and product popularity. 
        Whether you're hovering over states to catch a quick snapshot or clicking through for an in-depth analysis, 
        Consumer Quest makes it easy to visualize and compare the complexities of the market.
        <br></br>
        <br></br>
        Get ready to unlock insights with just a click—start your journey through the e-commerce behaviors of America now!
      </p>
    </div>
  );
};

export default Introduction;