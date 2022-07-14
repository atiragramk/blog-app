import { createSlice } from "@reduxjs/toolkit";
import {
  bookFetchStart,
  bookFetchInProgress,
  bookFetchSuccess,
  bookFetchError,
  bookPagination,
} from "../actions/bookList";

import { bookListDelete } from "../thunk";

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
  extraReducers: (builder) => {
    builder
      .addCase(bookListDelete.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bookListDelete.fulfilled, (state, action) => {
        console.log(action)
        return {
          ...state,
          loading: false,
          data: state.data.filter((book) => book.id !== action.meta.arg)
        }
      })
      .addCase(bookListDelete.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
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
