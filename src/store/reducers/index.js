import { combineReducers } from "redux";

import bookItemReducer from "../../pages/SingleBook/reducers/bookItem";
import bookListStatisticReducer from "../../pages/Statistics/reducers/bookList"
import bookListReducer from "../../pages/Books/reducers/bookList"


export default combineReducers({
    bookItem: bookItemReducer,
    bookListStatistic: bookListStatisticReducer,
    bookList: bookListReducer,
})