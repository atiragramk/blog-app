import { StyledContainer, StyledWrapper, StyledMenu } from "./styled";
import { NavLink, Link } from "react-router-dom"

import logo from "../../assets/img/logo.png";

export const Header = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Link to="/"><img src={logo} alt="logo"></img></Link>
        <h4>The Dark Tower</h4>
      </StyledWrapper>
      <StyledMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/book">Book List</NavLink>
        <NavLink to="/statistic">Statistics</NavLink>
      </StyledMenu>
    </StyledContainer>
  );
};
