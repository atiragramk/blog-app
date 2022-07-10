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

export const bookListPageSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.page
);

export const bookListOffsetSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.offset
);

export const bookListPageCountSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.pageCount
);

export const bookListItemsPerPageSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.itemsPerPage
);