import { put, call, takeLatest } from "redux-saga/effects";
import { getAllBooks } from "../../../api/books";

import { BOOK_STATISTIC_FETCH_START } from "../action-types/bookList";
import {
  bookStatisticFetchError,
  bookStatisticFetchInProgress,
  bookStatisticFetchSuccess,
} from "../actions/bookList";

function* bookStatisticFetchSaga() {
  try {
    yield put(bookStatisticFetchInProgress());
    const data = yield call(getAllBooks);
    yield put(bookStatisticFetchSuccess(data));
  } catch {
    yield put(bookStatisticFetchError());
  }
}

export default function* bookStatisticFetchWatcher() {
  yield takeLatest(BOOK_STATISTIC_FETCH_START, bookStatisticFetchSaga);
}
