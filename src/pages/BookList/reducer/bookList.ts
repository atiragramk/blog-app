import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { bookItemUpdateDataFetch, bookListFetch } from "../thunk/bookList";
import {
  bookCreateInProgress,
  bookCreateSuccess,
  bookCreateError,
  bookUpdateItemIdSet,
  bookUpdateInProgress,
  bookUpdateSuccess,
  bookUpdateError,
  bookDeleteItemDataSet,
  bookDeleteInProgress,
  bookDeleteSuccess,
  bookDeleteError,
  bookListReset,
  bookListUpdateReset,
  bookListDeleteReset,
} from "../actions/bookList";
import { TBookListState } from "../../../types/pages";

export const initialState: TBookListState = {
  loading: true,
  data: [],
  error: null,
  updateState: {
    loading: true,
    data: {},
    error: null,
    fetchData: { id: "" },
  },
  createState: {
    loading: false,
    data: {},
    error: null,
  },
  deleteState: {
    loading: false,
    data: null,
    error: null,
  },
};

const name = "BOOK_LIST";

const bookListSlice = createSlice({
  name,
  initialState,
  reducers: {
    bookCreateInProgress,
    bookCreateSuccess,
    bookCreateError,
    bookUpdateInProgress,
    bookUpdateSuccess,
    bookUpdateError,
    bookUpdateItemIdSet,
    bookDeleteItemDataSet,
    bookDeleteInProgress,
    bookDeleteSuccess,
    bookDeleteError,
    bookListReset,
    bookListUpdateReset,
    bookListDeleteReset,
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookListFetch.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(bookListFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(bookListFetch.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(bookItemUpdateDataFetch.pending, (state) => {
        state.updateState.loading = true;
        state.updateState.error = false;
      })
      .addCase(bookItemUpdateDataFetch.fulfilled, (state, action) => {
        state.updateState.loading = false;
        state.updateState.data = action.payload!;
        state.updateState.error = false;
      })
      .addCase(bookItemUpdateDataFetch.rejected, (state) => {
        state.updateState.loading = false;
        state.updateState.error = true;
      });
  },
});
export const {
  bookCreateInProgress: bookCreateInProgressAction,
  bookCreateSuccess: bookCreateSuccessAction,
  bookCreateError: bookCreateErrorAction,
  bookUpdateItemIdSet: bookUpdateItemIdSetAction,
  bookUpdateInProgress: bookUpdateInProgressAction,
  bookUpdateSuccess: bookUpdateSuccessAction,
  bookUpdateError: bookUpdateErrorAction,
  bookDeleteItemDataSet: bookDeleteItemDataSetAction,
  bookDeleteInProgress: bookDeleteInProgressAction,
  bookDeleteSuccess: bookDeleteSuccessAction,
  bookDeleteError: bookDeleteErrorAction,
  bookListReset: bookListResetAction,
  bookListUpdateReset: bookListUpdateResetAction,
  bookListDeleteReset: bookListDeleteResetAction,
} = bookListSlice.actions;

export default bookListSlice.reducer;
