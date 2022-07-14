import { combineReducers } from "redux";

import bookItem from "../../pages/SingleBook/reducer/bookItem";
import bookListStatistic from "../../pages/Statistics/reducer/statistic";
import bookList from "../../pages/Books/reducer/bookList";

export default combineReducers({
  bookItem,
  bookListStatistic,
  bookList,
});
