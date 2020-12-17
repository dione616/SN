import React from "react";
import { Link } from "react-router-dom";
import { AppBLContext } from "../App/layers/business";
import { LinkButton } from "../shared/LinkButton/views";
import { Header, Wrapper, Logo, Nav } from "./views";

const HeaderComponent = () => {
  const { profileData } = React.useContext(AppBLContext);
  const showProfileData = () => {
    return profileData.name || profileData.surname ? (
      <LinkButton
        style={{ border: "none" }}
      >{`${profileData.name} ${profileData.surname}`}</LinkButton>
    ) : (
      <Link to="/sign" style={{ display: "flex" }}>
        <LinkButton>SignIn/SignUp</LinkButton>
      </Link>
    );
  };
  return (
    <Header>
      <Wrapper>
        <Link to="/">
          <Logo>Nets</Logo>
        </Link>
        <Nav>
          <Link to="/articles" style={{ display: "flex" }}>
            <LinkButton>Articles</LinkButton>
          </Link>
          <Link to="/add_article" style={{ display: "flex" }}>
            <LinkButton>Add article</LinkButton>
          </Link>
          <Link to="/profile" style={{ display: "flex" }}>
            <LinkButton>Profile</LinkButton>
          </Link>
        </Nav>
        {showProfileData()}
      </Wrapper>
    </Header>
  );
};

export default HeaderComponent;
