import { put, call, takeLatest } from "redux-saga/effects";
import { getBook } from "../../../api/books";

import { BOOK_ITEM_FETCH_START } from "../action-types/bookItem";
import {
  bookItemFetchError,
  bookItemFetchInProgress,
  bookItemFetchSuccess,
} from "../actions/bookItem";

function* bookItemFetchSaga({ payload: { id } }) {
  try {
    yield put(bookItemFetchInProgress());
    const data = yield call(getBook, id);
    yield put(bookItemFetchSuccess(data));
  } catch {
    yield put(bookItemFetchError());
  }
}

export default function* bookItemFetchWatcher() {
  yield takeLatest(BOOK_ITEM_FETCH_START, bookItemFetchSaga);
}
