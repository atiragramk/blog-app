import { createSelector } from "reselect";

const bookListStateSelector = (state) => state.bookList;
const paginationSelector = (state) => state.pagination;

export const bookListPaginationSelector = createSelector(
  bookListStateSelector,
  paginationSelector,
  (bookList, pagination) => {
    return {
      page: pagination.page,
      offset: pagination.offset,
      itemsPerPage: pagination.itemsPerPage,
      endOffset: pagination.offset + pagination.itemsPerPage,
    };
  }
);

