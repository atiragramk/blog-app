import { put, takeLatest } from "redux-saga/effects";

import { bookItemFetchStart } from "../slice/bookItemSLice";

import { bookItemFetch } from "../slice/bookItemSLice";

function* bookItemFetchSaga({ payload }) {
  try {
    yield put(bookItemFetch.pending);
    yield put(bookItemFetch(payload));
  } catch { 
    yield put(bookItemFetch.rejected);
  }
}

export default function* bookItemFetchWatcher() {
  yield takeLatest(bookItemFetchStart, bookItemFetchSaga);
}
