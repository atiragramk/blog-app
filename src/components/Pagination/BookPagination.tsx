import { PaginationItem } from "reactstrap";
import { StyledPagination, StyledPaginationLink } from "./styled";
import PropTypes from "prop-types";
import { TPaginationProps} from "../../types/pagination";
import React from "react";

export const BookPagination: React.FC<TPaginationProps> = (props) => {
  const { currentPage, pageCount, onPagination } = props;

  return (
    <StyledPagination>
      <PaginationItem disabled={currentPage <= 0}>
        <StyledPaginationLink
          onClick={() => onPagination(currentPage - 1)}
          previous
          tag="button"
        />
      </PaginationItem>

      {[...Array(pageCount).keys()].map((page, index) => (
        <PaginationItem key={page}>
          <StyledPaginationLink
            tag="button"
            active={index === currentPage ? "active" : null}
            onClick={() => onPagination(index)}
          >
            {index + 1}
          </StyledPaginationLink>
        </PaginationItem>
      ))}

      <PaginationItem disabled={currentPage >= pageCount - 1}>
        <StyledPaginationLink
          tag="button"
          onClick={() => onPagination(currentPage + 1)}
          next
        />
      </PaginationItem>
    </StyledPagination>
  );
};

BookPagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  onPagination: PropTypes.func.isRequired,
};
