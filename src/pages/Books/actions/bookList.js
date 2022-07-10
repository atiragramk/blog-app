import {
  BOOK_LIST_FETCH_ERROR,
  BOOK_LIST_FETCH_IN_PROGRESS,
  BOOK_LIST_FETCH_SUCCESS,
  BOOK_LIST_FETCH_START,
  BOOK_LIST_SET_PAGE,
  BOOK_LIST_SET_PAGE_COUNT,
  BOOK_LIST_SET_OFFSET,
} from "../action-types/bookList";

export const bookListFetchStart = (page) => ({
  type: BOOK_LIST_FETCH_START,
  payload: { page },
});

export const bookListFetchInProgress = () => ({
  type: BOOK_LIST_FETCH_IN_PROGRESS,
});

export const bookListFetchSuccess = (data) => ({
  type: BOOK_LIST_FETCH_SUCCESS,
  payload: { data },
});

export const bookListFetchError = () => ({
  type: BOOK_LIST_FETCH_ERROR,
});

export const bookListSetPage = (page) => ({
  type: BOOK_LIST_SET_PAGE,
  payload: { page },
});

export const bookListSetPageCount = (pageCount) => ({
  type: BOOK_LIST_SET_PAGE_COUNT,
  payload: { pageCount },
});

export const bookListSetOffset = (offset) => ({
  type: BOOK_LIST_SET_OFFSET,
  payload: { offset },
});
