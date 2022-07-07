import { Pagination, PaginationLink } from "reactstrap";

import styled from "styled-components";

export const StyledPagination = styled(Pagination)`
  ul {
    justify-content: center;
    margin: 20px 0;
    text-align: center;
  }
`;

export const StyledPaginationLink = styled(PaginationLink)`
  min-width: 42px;
  color: ${({ active }) => (active ? "rgb(255 255 255)" : "rgb(110 45 53)")};
  background-color: ${({ active }) =>
    active ? "rgb(110 45 53)" : "rgb(255 255 255)"};
  &:hover {
    background-color: rgb(122 122 122 / 60%);
    color: rgb(255 255 255);
  }
  &:focus {
    color: rgb(255 255 255);
    background-color: rgb(110 45 53);
    box-shadow: none;
  }
`;
