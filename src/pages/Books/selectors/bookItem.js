import { createSelector } from "reselect";

const bookListStateSelector = (state) => state.bookList;

export const bookListLoadingSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.loading
);

export const bookListDataSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.data
);

export const bookListErrorSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.error
);

export const bookListPaginationSelector = createSelector(
  bookListStateSelector,
  (bookList) => {
    return {
      data: bookList.data,
      page: bookList.page,
      offset:bookList.offset,
      itemsPerPage:bookList.itemsPerPage,
      pageCount: Math.ceil(bookList.data.length / bookList.itemsPerPage),
      endOffset: bookList.offset + bookList.itemsPerPage,
    }
  }
)
