import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  error: null,
  loading: true,
  page: 0,
  offset: 0,
  itemsPerPage: 9,
  pageCount: null,
};

const bookListSlice = createSlice({
  name: "bookList",
  initialState,
  reducers: {
    bookListFetchStart() {},
    bookListFetchInProgress(state) {
      state.loading = true;
      state.error = null;
    },
    bookListFetchSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    bookListFetchError(state) {
      state.loading = false;
      state.error = true;
    },
    bookListSetPage(state, action) {
      state.page = action.payload;
    },
    bookListSetOffset(state, action) {
      state.offset = action.payload;
    },
    bookListSetPageCount(state, action) {
      state.pageCount = action.payload;
    },
  },
});

export const {
  bookListFetchStart,
  bookListFetchInProgress,
  bookListFetchError,
  bookListFetchSuccess,
  bookListSetOffset,
  bookListSetPage,
  bookListSetPageCount,
} = bookListSlice.actions;

export default bookListSlice.reducer;
