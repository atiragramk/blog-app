import { Container } from "reactstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: flex;
  img {
    height: 500px;
    border-radius: 10px;
  }
`;

export const StyledText = styled.div`
  padding: 10px;
  p {
    padding: 10px;
    font-size: 18px;
  }
`;
