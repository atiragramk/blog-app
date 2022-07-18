import styled from "styled-components";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";

export const StyledCard = styled(Card)`
  position: relative;
  margin: 10px;
  width: 400px;
  height: 260px;
  text-align: center;
  padding: 7px;
  border-radius: 2px;
  box-shadow: 0px 1px 5px rgb(244 233 235);
`;

export const StyledButton = styled(Button)`
  position: absolute;
  right: ${({ edit }) => (edit ? "50px" : "10px")};
  color: rgb(110 45 53);
  padding: 3px 7px;
  background-color: transparent;
  border-color: rgb(110 45 53);

  &:hover {
    background-color: rgb(110 45 53);
    border-color: rgb(110 45 53);
    color: #fff;
  }
  &:active:focus {
    background-color: rgb(110 45 53);
    border-color: rgb(110 45 53);
  }
  &:active {
    background-color: rgb(110 45 53);
    border-color: rgb(110 45 53);
    color: #fff;
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(110 45 53 / 50%);
    background-color: rgb(110 45 53);
    border-color: rgb(110 45 53);
    color: #fff;
  }
`;

export const StyledCardTitle = styled(CardTitle)`
  font-weight: bold;
  margin-top: 40px;
  min-height: 50px;
`;

export const StyledCardText = styled(CardText)`
  min-height: 80px;
  margin-bottom: 15px;
  font-size: 16px;
`;

export const StyledDate = styled(CardSubtitle)`
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  border: 1px solid rgb(110 45 53);
  color: rgb(110 45 53);
  text-decoration: none;
  position: absolute;
  right: 10px;
  padding: 3px 5px;
  min-width: 65px;
  border-radius: 3px;
  &:hover {
    color: white;
    background-color: rgb(110 45 53);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
