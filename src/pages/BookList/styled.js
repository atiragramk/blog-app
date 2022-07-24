import styled from "styled-components";
import { Container } from "reactstrap";
import ReactPaginate from "react-paginate";
import Button from "antd/lib/button";
import Spin from "antd/lib/spin";

export const StyledButton = styled(Button)`
  display: block;
  margin: 20px auto;
  background-color: rgb(255 186 89);
  color: rgb(63 65 69);
  border-color: rgb(255 186 89);
  &:hover {
    background-color: transparent;
    border-color: rgb(255 186 89);
    color: rgb(255 186 89);
  }
  &:active:focus {
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
  }
  &:active {
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
    color: rgb(63 65 69);
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(255 186 89 / 50%);
    color: rgb(63 65 69);
  }
`;

export const StyledSpinner = styled(Spin)`
  .ant-spin-dot-item {
    background-color: rgb(255 186 89);
  }
`;

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  padding: 0;
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
