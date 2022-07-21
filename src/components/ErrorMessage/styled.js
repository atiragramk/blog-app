import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledImage = styled.img`
  margin: 0 auto;
  display: block;
`;

export const StyledLink = styled(Link)`
  max-width: fit-content;
  display: block;
  margin: 10px auto;
  border: 1px solid rgb(255 186 89);
  color: rgb(69 79 99);
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background-color: rgb(255 186 89);
  }
`;
