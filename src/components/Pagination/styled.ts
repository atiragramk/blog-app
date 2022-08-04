import { Pagination, PaginationLink } from "reactstrap";

import styled from "styled-components";

export const StyledPagination = styled(Pagination)`
  ul {
    justify-content: center;
    margin: 20px 0;
    text-align: center;
    padding-bottom: 20px;
  }
`;

export const StyledPaginationLink = styled(PaginationLink)`
  min-width: 42px;
  color: ${({ active }) => (active ? "rgb(69 79 99)" : "rgb(69 79 99)")};
  background-color: ${({ active }) =>
    active ? "rgb(255 186 89)" : "rgb(255 255 255)"};
  &:hover {
    background-color: rgb(69 79 89 / 20%);
    color: rgb(255 186 89);
  }
  &:focus {
    color: rgb(69 79 89);
    background-color: rgb(255 186 89);
    box-shadow: none;
  }
`;
