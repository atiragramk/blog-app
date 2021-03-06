// @ts-check
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
  bookListUpdateResetAction,
  bookListDeleteResetAction,
} from "../reducer/bookList";

import { modalOpenToggleAction } from "../../../store/modal/reducer/modal";
import { toast } from "react-toastify";

const BOOK_LIST_FETCH_THUNK_TYPE = "BOOK_LIST_FETCH_THUNK_TYPE";

/**
 * Book list fetch thunk
 */
export const bookListFetch = createAsyncThunk(
  BOOK_LIST_FETCH_THUNK_TYPE,
  /**
   * @async
   * @param {any} _
   * @param {any} param1
   * @returns {Promise<array>}
   */
  async (_, { rejectWithValue }) => {
    try {
      return await getAllBooks();
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

const BOOK_LIST_CREATE_THUNK_TYPE = "BOOK_LIST_CREATE_THUNK_TYPE";
/**
 * Book item create thunk
 */
export const bookItemCreate = createAsyncThunk(
  BOOK_LIST_CREATE_THUNK_TYPE,
  /**
   * @async
   * @param {{title: string, description: string, pageCount: number}} data - book data
   * @param {any} param1
   */
  async (data, { dispatch }) => {
    try {
      dispatch(bookCreateInProgressAction());
      await createBook(data);
      dispatch(bookCreateSuccessAction());
      // @ts-ignore
      dispatch(modalOpenToggleAction());
      toast.success("Book was created");
      // @ts-ignore
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error("Something went wrong");
      dispatch(bookCreateErrorAction());
    }
  }
);

const BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE =
  "BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE";
/**
 * Book item update thunk
 */
export const bookItemUpdateDataFetch = createAsyncThunk(
  BOOK_LIST_UPDATE_FETCH_DATA_THUNK_TYPE,
  /**
   * @async
   * @param {{title: string, description: string, pageCount: number, id: string, publishDate: string}} data - book data
   * @param {any} param1
   * @returns {Promise<any>}
   */
  async (data, { dispatch }) => {
    try {
      return await getBook(data.id);
    } catch (error) {
      toast.error("Something went wrong");
      dispatch(bookUpdateErrorAction());
    }
  }
);

const BOOK_LIST_UPDATE_THUNK_TYPE = "BOOK_LIST_UPDATE_THUNK_TYPE";
/**
 * Book list update thunk
 */
export const bookItemUpdate = createAsyncThunk(
  BOOK_LIST_UPDATE_THUNK_TYPE,
  /**
   * @async
   * @param {{title: string, description: string, pageCount: number, id: string}} data  - book data
   * @param {any} param1
   */
  async (data, { dispatch }) => {
    try {
      dispatch(bookUpdateInProgressAction());
      await updateBook(data, data.id);
      dispatch(bookUpdateSuccessAction());
      // @ts-ignore
      dispatch(modalOpenToggleAction());
      toast.success("Book was updated");
      dispatch(bookListUpdateResetAction());
      // @ts-ignore
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error("Something went wrong");
      console.log(error);
      dispatch(bookUpdateErrorAction());
    }
  }
);

const BOOK_LIST_DELETE_THUNK_TYPE = "BOOK_LIST_DELETE_THUNK_TYPE";
/**
 * Book item delete thunk
 */
export const bookItemDelete = createAsyncThunk(
  BOOK_LIST_DELETE_THUNK_TYPE,
  /**
   * @async
   * @param {{title: string, description: string, pageCount: number, _id: string}} data - book data
   * @param {any} param1
   */
  async (data, { dispatch }) => {
    try {
      dispatch(bookDeleteInProgressAction());
      await deleteBook(data._id);
      dispatch(bookDeleteSuccessAction());
      // @ts-ignore
      dispatch(modalOpenToggleAction());
      toast.success("Book was deleted");
      dispatch(bookListDeleteResetAction());
      // @ts-ignore
      await dispatch(bookListFetch());
    } catch (error) {
      toast.error("Something went wrong");
      dispatch(bookDeleteErrorAction());
    }
  }
);
