import styled from "styled-components";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
  margin: 10px;
  max-width: 400px;
  text-align: center;
  padding: 7px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(244 233 235);
`;

export const StyledCardTitle = styled(CardTitle)`
  font-weight: bold;
`;

export const StyledCardText = styled(CardText)`
  min-height: 80px;
  margin-bottom: 15px;
  font-size: 18px;
`;

export const StyledDate = styled(CardSubtitle)`
    font-style:italic;
`

export const StyledLink = styled(Link)`
  border: 1px solid rgb(110 45 53);
  color: rgb(110 45 53);
  text-decoration: none;
  padding: 3px 5px;
  min-width: 65px;
  border-radius: 5px;
  &:hover {
    color: white;
    background-color: rgb(110 45 53);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
