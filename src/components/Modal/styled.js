import styled from "styled-components";

import Button from "antd/lib/button";

export const StyledButton = styled(Button)`
  color: rgb(110 45 53);
  padding: 3px 15px;
  background-color: transparent;
  border-color: rgb(110 45 53 / 56%);

  &:hover {
    background-color: rgb(110 45 53 / 56%);
    border-color: rgb(110 45 53/ 56%);
    color: #fff;
  }
  &:active:focus {
    background-color: rgb(110 45 53/ 56%);
    border-color: rgb(110 45 53/ 56%);
  }
  &:active {
    background-color: rgb(110 45 53/ 56%);
    border-color: rgb(110 45 53/ 56%);
    color: #fff;
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgb(110 45 53 / 50%);
    background-color: rgb(110 45 53);
    border-color: rgb(110 45 53);
    color: #fff;
  }
`;
