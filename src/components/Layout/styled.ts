import styled from "styled-components";
import { Nav, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 30px;
  background: rgba(255, 186, 89, 0.05);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 186, 89, 0.1);
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.h5`
  color: rgb(69 79 99);
  margin: 0px auto;
`;

export const StyledImage = styled.img`
  height: 80px;
  margin-right: 20px;
`;

export const StyledMenu = styled(Nav)`
  justify-content: space-between;
  width: 260px;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 18px;
  text-decoration: none;
  position: relative;
  padding: 3px 7px;
  color: rgb(69 79 99);

  &::after {
    content: "";
    position: absolute;
    top: 40px;
    left: 0px;
    width: 100%;
    height: 0.1em;
    background-color: rgb(255 186 89);
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
    transform: translate3d(-100%, 0, 0);
  }

  &:hover {
    color: rgb(151 151 151);
  }

  &.active {
    pointer-events: none;
    &::after {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    pointer-events: none;
  }
`;
