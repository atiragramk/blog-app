import styled from "styled-components";
import { Button, Card } from "reactstrap";
import { Link } from "react-router-dom";

export const StyledButton = styled(Button)`
  display: block;
  margin: 10px auto;
  background-color: white;
`;

export const StyledCard = styled(Card)`
  margin: 10px;
  max-width: 400px;
  text-align: center;
  padding: 7px;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgb(244 233 235);
  h4 {
    font-weight: bold;
  }
  p {
    min-height: 100px;
    margin-bottom: 15px;
  }
`;

export const StyledLink = styled(Link)`
  border: 1px solid gray;
  color: rgb(33 37 41);
  text-decoration: none;
  padding: 3px 5px;
  min-width: 65px;
  border-radius: 5px;
  display: block-size;
  &:hover {
    color: white;
    background-color: rgb(33 37 41);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
