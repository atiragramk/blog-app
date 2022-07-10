import { put, call, takeLatest, select } from "redux-saga/effects";
import { getAllBooks } from "../../../api/books";

import { BOOK_LIST_FETCH_START } from "../action-types/bookList";
import {
  bookListFetchError,
  bookListFetchInProgress,
  bookListFetchSuccess,
  bookListSetPage,
  bookListSetPageCount,
  bookListSetOffset,
} from "../actions/bookList";

import {
  bookListItemsPerPageSelector,
  bookListOffsetSelector,
} from "../selectors/bookItem";

function* bookListFetchSaga({ payload: { page } }) {
  try {
    yield put(bookListFetchInProgress());

    const data = yield call(getAllBooks);
    const offset = yield select(bookListOffsetSelector);
    const itemsPerPage = yield select(bookListItemsPerPageSelector);
    const pageCount = yield Math.ceil(data.length / itemsPerPage);
    const endOffset = offset + itemsPerPage;
    const bookList = yield data.slice(offset, endOffset);
    const newOffset = yield (page * itemsPerPage) % data.length;

    yield put(bookListSetPage(page));
    yield put(bookListSetPageCount(pageCount));
    yield put(bookListFetchSuccess(bookList));
    yield put(bookListSetOffset(newOffset));
  } catch {
    yield put(bookListFetchError());
  }
}

export default function* bookListFetchWatcher() {
  yield takeLatest(BOOK_LIST_FETCH_START, bookListFetchSaga);
}
