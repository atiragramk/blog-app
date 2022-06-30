import styled from "styled-components";
import { Nav, Container } from "reactstrap";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 100px;
    margin-right: 20px;
  }
  h3 {
    color: rgb(61 66 64);
  }
`;

export const StyledMenu = styled(Nav)`
  justify-content: space-between;
  width: 500px;
  a {
    font-size: 20px;
    text-decoration: none;
    padding: 4px 15px;
    color: rgb(110 45 53);

    &.active {
      background-color: rgb(110 45 53);
      color: white;
      border-radius: 5px;
    }
  }
`;
