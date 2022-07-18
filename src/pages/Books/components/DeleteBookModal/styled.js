import styled from "styled-components";
import Spin from "antd/lib/spin";

export const StyledSpin = styled(Spin)`
  display: block;
  .ant-spin-dot {
    display: flex;
    margin: 10px auto;
  }
  .ant-spin-dot-item {
    background-color: rgb(110 45 53);
  }
`;
