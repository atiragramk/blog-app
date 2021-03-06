import { combineReducers } from "redux";

import bookItem from "../../pages/BookItem/reducer/bookItem";
import bookListStatistic from "../../pages/Statistics/reducer/statistic";
import bookList from "../../pages/BookList/reducer/bookList";
import pagination from "../../components/Pagination/reducer/pagination";
import modal from "../modal/reducer/modal";

export default combineReducers({
  bookItem,
  bookListStatistic,
  bookList,
  modal,
  pagination,
});
