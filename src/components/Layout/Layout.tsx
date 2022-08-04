import {
  StyledContainer,
  StyledWrapper,
  StyledMenu,
  StyledNavLink,
  StyledLink,
  StyledImage,
  StyledText,
} from "./styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

import logo from '../../assets/img/logo.png';


export const Layout = () => {
  return (
    <>
      <StyledContainer>
        <StyledWrapper>
          <StyledLink to="/">
            <StyledImage src={logo} alt="logo"></StyledImage>
          </StyledLink>
          <StyledText>The Dark Tower</StyledText>
        </StyledWrapper>
        <StyledMenu>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="books">Book List</StyledNavLink>
          <StyledNavLink to="statistics">Statistics</StyledNavLink>
        </StyledMenu>
      </StyledContainer>
      <Suspense >
        <Outlet />
      </Suspense>
    </>
  );
};
