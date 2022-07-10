import styled from "styled-components";
import { Spinner } from "reactstrap";
import { Link } from "react-router-dom";

export const StyledWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: column;
`;

export const StyledHeader = styled.h3`
  font-weight: bold;
  margin: 0px auto;
`;

export const StyledText = styled.p`
  margin: 20px 0;
  font-size: 16px;
`;

export const StyledDate = styled.span`
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  border: 1px solid rgb(110 45 53);
  color: rgb(110 45 53);
  text-decoration: none;
  padding: 10px 15px;
  min-width: 85px;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: rgb(110 45 53);
  }
`;

export const StyledSpinner = styled(Spinner)`
  display: flex;
  margin: 0 auto;
  color: rgb(110 45 53);
`;
