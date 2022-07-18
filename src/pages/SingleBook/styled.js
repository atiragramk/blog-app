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
`;

export const StyledText = styled.p`
  margin: 20px 0;
  font-size: 16px;
`;

export const StyledDate = styled.span`
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  border: 1px solid rgb(110 45 53);
  color: rgb(110 45 53);
  text-decoration: none;
  padding: 7px 12px;
  min-width: 85px;
  border-radius: 2px;
  &:hover {
    color: white;
    background-color: rgb(110 45 53);
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
