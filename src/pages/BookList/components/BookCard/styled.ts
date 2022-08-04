import styled, { StyledComponent } from "styled-components";
import { Card, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import Button from "antd/lib/button";

type TProps = {
  edit?: string;
};
export const StyledCard = styled(Card)`
  position: relative;
  margin: 10px;
  width: 400px;
  height: 260px;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0px 1px 5px rgb(244 233 235);
`;

export const StyledButton = styled(Button)`
  position: absolute;
  right: ${(p: TProps) => (p.edit ? "50px" : "10px")};
  color: rgb(69 79 99);
  padding: 6px 7px;
  background-color: transparent;
  border-color: rgb(255 186 89);
  span {
    display: inline-flex;
    align-items: center;
  }
  &:hover {
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
    color: #fff;
  }

  &:active:focus {
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
  }
  &:active {
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
    color: #fff;
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(255 186 89 / 50%);
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
    color: #fff;
  }
`;

export const StyledCardTitle = styled(CardTitle)`
  font-weight: bold;
  margin-top: 40px;
  min-height: 50px;
  color: rgb(69 79 99);
`;

export const StyledCardText = styled(CardText)`
  min-height: 80px;
  margin-bottom: 15px;
  font-size: 16px;
  color: rgb(69 79 99);
`;

export const StyledDate = styled(CardSubtitle)`
  font-style: italic;
  color: rgb(69 79 99);
`;

export const StyledLink = styled(Link)`
  border: 1px solid rgb(255 186 89);
  color: rgb(69 79 99);
  text-decoration: none;
  position: absolute;
  right: 10px;
  padding: 3px 5px;
  min-width: 65px;
  border-radius: 3px;
  &:hover {
    color: #fff;
    background-color: rgb(255 186 89);
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;
