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

export const bookListUpdateStateSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.updateState
);

export const bookListCreateStateSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.createState
);

export const bookListDeleteStateSelector = createSelector(
  bookListStateSelector,
  (bookList) => bookList.deleteState
);
