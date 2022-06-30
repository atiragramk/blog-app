import { Container, Table } from "reactstrap";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const StyleTable = styled(Table)`
  box-shadow: 0px 1px 5px rgb(85 78 79);
  border-radius: 5px;
  td {
    min-width: 100px;
  }
`;
