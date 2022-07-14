import { all, fork } from "redux-saga/effects";

import bookListFetchWatcher from "../../pages/Books/sagas";


const combinedSagas = {
  bookList: bookListFetchWatcher,
};

export default function* rootSaga() {
  yield all(Object.values(combinedSagas).map((saga) => fork(saga)));
}
