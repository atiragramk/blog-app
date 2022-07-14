import { createSlice } from "@reduxjs/toolkit";
import {
  bookFetchStart,
  bookFetchInProgress,
  bookFetchSuccess,
  bookFetchError,
  bookPagination,
} from "../actions/bookList";

const initialState = {
  data: [],
  error: null,
  loading: true,
  page: 0,
  offset: 0,
  itemsPerPage: 9,
  pageCount: 0,
};

const name = "BOOK_LIST";

const bookListSlice = createSlice({
  name,
  initialState,
  reducers: {
    bookListFetchStart: bookFetchStart,
    bookListFetchInProgress: bookFetchInProgress,
    bookListFetchSuccess: bookFetchSuccess,
    bookListFetchError: bookFetchError,
    bookListPagination: bookPagination,
  },
});

export const {
  bookListFetchStart,
  bookListFetchInProgress,
  bookListFetchError,
  bookListFetchSuccess,
  bookListPagination,
} = bookListSlice.actions;

export default bookListSlice.reducer;
