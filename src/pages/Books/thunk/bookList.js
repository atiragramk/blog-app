import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createBook,
  deleteBook,
  getAllBooks,
  getBook,
  updateBook,
} from "../../../api/books";
import {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
  bookUpdateInProgressAction,
  bookUpdateSuccessAction,
  bookUpdateErrorAction,
  bookDeleteSuccessAction,
  bookDeleteErrorAction,
  bookDeleteInProgressAction,
} from "../reducer/bookList";

import { modalOpenToggleAction } from "../../../store/modal/reducer/modal";

const BOOK_LIST_FETCH_THUNK_TYPE = "BOOK_LIST_FETCH_THUNK_TYPE";

export const bookListFetch = createAsyncThunk(
  BOOK_LIST_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getAllBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const BOOK_LIST_CREATE_THUNK_TYPE = "BOOK_LIST_CREATE_THUNK_TYPE";

export const bookItemCreate = createAsyncThunk(
  BOOK_LIST_CREATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await createBook(data);
      dispatch(bookCreateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
    }
  }
);

const BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE =
  "BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE";

export const bookItemUpdateDataFetch = createAsyncThunk(
  BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      return await getBook(data.id);
    } catch (error) {
      dispatch(bookCreateErrorAction(error.data));
    }
  }
);

const BOOK_LIST_UPDATE_THUNK_TYPE = "BOOK_LIST_UPDATE_THUNK_TYPE";

export const bookItemUpdate = createAsyncThunk(
  BOOK_LIST_UPDATE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookUpdateInProgressAction());
      await updateBook(data, data.id);
      dispatch(bookUpdateSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
    } catch (error) {
      dispatch(bookUpdateErrorAction(error.data));
    }
  }
);

const BOOK_LIST_DELETE_THUNK_TYPE = "BOOK_LIST_DELETE_THUNK_TYPE";

export const bookItemDelete = createAsyncThunk(
  BOOK_LIST_DELETE_THUNK_TYPE,
  async (data, { dispatch }) => {
    try {
      dispatch(bookDeleteInProgressAction());
      await deleteBook(data._id);
      dispatch(bookDeleteSuccessAction());
      dispatch(modalOpenToggleAction());
      await dispatch(bookListFetch());
    } catch (error) {
      dispatch(bookDeleteErrorAction(error.data));
    }
  }
);
