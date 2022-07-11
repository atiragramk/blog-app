import { put, takeLatest } from "redux-saga/effects";
import { bookListStatisticFetch } from "../slice/bookListStatSlice";
import { bookListStatisticFetchStart } from "../slice/bookListStatSlice";

function* bookListStatisticFetchSaga() {
  try {
    yield put(bookListStatisticFetch.pending);
    yield put(bookListStatisticFetch());
  } catch {
    yield put(bookListStatisticFetch.rejected);
  }
}

export default function* bookListStatisticFetchWatcher() {
  yield takeLatest(
    bookListStatisticFetchStart,
    bookListStatisticFetchSaga
  );
}
