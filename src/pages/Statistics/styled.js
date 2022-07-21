import { Container } from "reactstrap";
import styled from "styled-components";
import Spin from "antd/lib/spin";
import { Link } from "react-router-dom";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const StyledSpinner = styled(Spin)`
  display: block;
  .ant-spin-dot {
    display: flex;
    margin: 10px auto;
  }
  .ant-spin-dot-item {
    background-color: rgb(255 186 89);
  }
`;

export const StyledLink = styled(Link)`
  color: rgb(255 186 89);
`;
