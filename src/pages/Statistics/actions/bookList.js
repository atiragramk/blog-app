import {
  BOOK_STATISTIC_FETCH_ERROR,
  BOOK_STATISTIC_FETCH_IN_PROGRESS,
  BOOK_STATISTIC_FETCH_SUCCESS,
  BOOK_STATISTIC_FETCH_START,
} from "../action-types/bookList";

export const bookStatisticFetchStart = () => ({
  type: BOOK_STATISTIC_FETCH_START,
});

export const bookStatisticFetchInProgress = () => ({
  type: BOOK_STATISTIC_FETCH_IN_PROGRESS,
});

export const bookStatisticFetchSuccess = (data) => ({
  type: BOOK_STATISTIC_FETCH_SUCCESS,
  payload: { data },
});

export const bookStatisticFetchError = () => ({
  type: BOOK_STATISTIC_FETCH_ERROR,
});

