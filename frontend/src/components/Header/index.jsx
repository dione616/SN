import React from "react";
import { Link } from "react-router-dom";
import { Header, Wrapper, Auth, Logo } from "./views";

const HeaderComponent = () => {
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo>Nets</Logo>
        </Link>
        <Link to="/sign" style={{ display: "flex" }}>
          <Auth>Sign In/Up</Auth>
        </Link>
      </Wrapper>
    </Header>
  );
};

export default HeaderComponent;
