import { Stack } from "@mui/material";
import React from "react";

const Introduction = () => {
  return (
    <div className="intro" id="intro">
      <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <h1 className="title-with-bars">Welcome to ShopScopeUSA</h1>
        <p>
          Dive into the dynamic world of U.S. e-commerce with ShopScopeUSA, your interactive portal to discovering
          the latest shopping trends across the nation. Our website brings consumer data to life, offering a vivid exploration
          of how different states engage with online shopping. From age demographics to spending habits, we map it all out,
          providing you with a color-coded journey through America's e-commerce landscape.
          <br /><br />
          Navigate our multi-layered maps to uncover regional shopping preferences, or delve into our
          detailed dashboards that break down consumer behaviors and product popularity.
          Whether you're hovering over states to catch a quick snapshot or clicking through for an in-depth analysis,
          ShopScopeUSA makes it easy to visualize and compare the complexities of the market.
          <br /><br />
          Get ready to unlock insights with just a click—start your journey through the e-commerce behaviors of America now!
        </p>
      </Stack>
    </div>
  );
};

export default Introduction;
