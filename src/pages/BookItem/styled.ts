import styled from "styled-components";
import { Link } from "react-router-dom";
import Spin from "antd/lib/spin";

export const StyledWrapper = styled.div`
  display: flex;
  margin: 50px auto;
  flex-direction: column;
`;

export const StyledHeader = styled.h3`
  font-weight: bold;
  margin: 0px auto;
  color: rgb(69 79 99);
`;

export const StyledText = styled.p`
  margin: 20px 0;
  font-size: 16px;
  color: rgb(69 79 99);
`;

export const StyledDate = styled.span`
  font-style: italic;
  color: rgb(69 79 99);
`;

export const StyledLink = styled(Link)`
  border: 1px solid rgb(255 186 89);
  color: rgb(69 79 99);
  text-decoration: none;
  padding: 7px 12px;
  min-width: 85px;
  border-radius: 2px;
  margin-right: 20px;
  &:hover {
    color: #fff;
    background-color: rgb(255 186 89);
  }
`;

export const StyledSpinner = styled(Spin)`
  display: block;
  .ant-spin-dot {
    display: flex;
    margin: 10px auto;
  }
  .ant-spin-dot-item {
    background-color: rgb(110 45 53);
  }
`;
