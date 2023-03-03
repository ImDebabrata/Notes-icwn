import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavBar>
      <Header>Notes App</Header>
    </NavBar>
  );
};

const NavBar = styled.nav`
  background-color: #6dab3c;
  padding: 10px;
  margin-bottom: 10px;
`;

const Header = styled.h4`
  text-align: left;
  color: white;
`;

export default Nav;
