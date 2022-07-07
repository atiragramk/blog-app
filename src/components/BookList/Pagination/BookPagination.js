import { PaginationItem } from "reactstrap";
import { StyledPagination, StyledPaginationLink } from "./styled";

export const BookPagination = (props) => {
  const { currentPage, pageCount, onPagination } = props;


  return (
    <StyledPagination>
      <PaginationItem disabled={currentPage <= 0}>
        <StyledPaginationLink
          onClick={(event) => onPagination(event, currentPage - 1)}
          previous
          href="#"
        />
      </PaginationItem>

      {[...Array(pageCount).keys()].map((page, index) => (
        <PaginationItem key={page}>
          <StyledPaginationLink 
          active={index === currentPage}
          onClick={(event) => onPagination(event, index)} href="#">
            {index + 1}
          </StyledPaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={currentPage >= pageCount - 1}>
        <StyledPaginationLink
          onClick={(event) => onPagination(event, currentPage + 1)}
          next
          href="#"
        />
      </PaginationItem>
    </StyledPagination>
  );
};
