import { all, fork } from "redux-saga/effects";

import bookItemFetchWatcher from "../../pages/SingleBook/sagas";
import bookStatisticFetchWatcher from "../../pages/Statistics/sagas";
import bookListFetchWatcher from "../../pages/Books/sagas";


const combinedSagas = {
  bookItemSaga: bookItemFetchWatcher,
  bookStatisticSaga: bookStatisticFetchWatcher,
  bookList: bookListFetchWatcher,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
