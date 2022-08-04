import styled from "styled-components";

import Button from "antd/lib/button";

export const StyledButton = styled(Button)`
  color: rgb(69 79 99);
  padding: 3px 15px;
  background-color: transparent;
  border-color: rgb(255 186 89);

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
    box-shadow: 0 0 0 0.25rem rgb(255 186 89);
    background-color: rgb(255 186 89);
    border-color: rgb(255 186 89);
    color: #fff;
  }
`;
