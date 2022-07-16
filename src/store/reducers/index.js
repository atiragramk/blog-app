import { combineReducers } from "redux";

import bookItem from "../../pages/SingleBook/reducer/bookItem";
import bookListStatistic from "../../pages/Statistics/reducer/statistic";
import bookList from "../../pages/Books/reducer/bookList";
import deleteModal from "../../pages/Books/components/Modal/reducer/deleteModal"
import createModal from "../../pages/Books/components/Modal/reducer/createModal";
import pagination from "../../components/Pagination/reducer/pagination";
import updateModal from "../../pages/Books/components/Modal/reducer/updateModal";

export default combineReducers({
  bookItem,
  bookListStatistic,
  bookList,
  deleteModal,
  pagination,
  createModal,
  updateModal,
});
