import styled from "styled-components";
import { Nav, Container } from "reactstrap";
import { NavLink } from "react-router-dom";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto 30px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledText = styled.h4`
  color: rgb(61 66 64);
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
  padding: 3px 10px;
  color: rgb(110 45 53);
  &:hover {
    color: rgb(151 151 151);
  }

  &.active {
    background-color: rgb(110 45 53);
    color: white;
    border-radius: 2px;
    pointer-events: none;
  }
`;

export const StyledLink = styled(NavLink)`
  &.active {
    pointer-events: none;
  }
`;
