import { put, call, takeLatest, select } from "redux-saga/effects";
import { getAllBooks } from "../../../api/books";

import {
  bookListFetchStart,
  bookListFetchError,
  bookListFetchInProgress,
  bookListFetchSuccess,
  bookListPagination
} from "../reducer/bookList";

import {
  bookListPaginationSelector
} from "../selectors/bookItem";

function* bookListFetchSaga({payload}) {
  try {
    yield put(bookListFetchInProgress());
    const data = yield call(getAllBooks);
    yield put(bookListFetchSuccess(data));
    const {itemsPerPage, pageCount} = yield select(bookListPaginationSelector);
    const newOffset = yield (payload * itemsPerPage) % data.length;
    yield put(bookListPagination({offset: newOffset, page: payload, pageCount}));
  } catch {
    yield put(bookListFetchError());
  }
}

export default function* bookListFetchWatcher() {
  yield takeLatest(bookListFetchStart.type, bookListFetchSaga);
}
