import styled from "styled-components";
import { Button, Spinner, Container } from "reactstrap";
import ReactPaginate from "react-paginate";

export const StyledButton = styled(Button)`
  display: block;
  margin: 10px auto;
  background-color: white;
  color: rgb(110 45 53);
  border-color: rgb(110 45 53);
  padding: 5px 10px;
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
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(110 45 53 / 50%);
    color: rgb(110 45 53);
  }
`;

export const StyledSpinner = styled(Spinner)`
  display: flex;
  margin: 0 auto;
  color: rgb(110 45 53);
`;

export const StyledContainer = styled(Container)`
  display: flex;
  padding-right: 0;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  list-style: none;
  margin: 30px auto;
  padding-left: 0px;
  width: fit-content;
  border: 1px solid rgb(186 182 182);
  border-radius: 5px;

  li {
    padding: 7px 15px;
    color: rgb(110 45 53);
    border-left: 1px solid #dee2e6;
    &.active {
      background-color: rgb(110 45 53);
      color: white;
    }
  }
  a {
    color: rgb(110 45 53);
    text-decoration: none;
    &.disabled {
      pointer-events: none;
      color: gray;
    }
  }
`;
