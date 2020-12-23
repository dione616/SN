import React from "react";
import { NavLink } from "react-router-dom";
//styled-components
import { NavigationWrapper, NavigationList, NavigationItem } from "./views";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/">News</NavLink>
        </NavigationItem>
        <NavigationItem>
          <NavLink to="/friends">Friends</NavLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
};

export default Navigation;
