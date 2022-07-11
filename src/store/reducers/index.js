import { combineReducers } from "redux";

import bookItem from "../../pages/SingleBook/slice/bookItemSLice";
import bookListStatistic from "../../pages/Statistics/slice/bookListStatSlice";
import bookList from "../../pages/Books/slice/bookListSlice";

export default combineReducers({
  bookItem,
  bookListStatistic,
  bookList,
});
