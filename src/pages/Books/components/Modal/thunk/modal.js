import { createAsyncThunk } from "@reduxjs/toolkit";
import { createBook, deleteBook, updateBook } from "../../../../../api/books";
import { bookListFetch } from "../../../thunk/bookList";

const deleteThunkName = "BOOK_ITEM_DELETE";
const createThunkName = "BOOK_ITEM_CREATE";
const updateThunkName = 'BOOK_ITEM_UPDATE'


export const bookItemDelete = createAsyncThunk(
  deleteThunkName,
  async (id, { dispatch, rejectWithValue }) => {
    try {
      await deleteBook(id);
      await dispatch(bookListFetch());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);

export const bookItemCreate = createAsyncThunk(
  createThunkName,
  async (data, { dispatch, rejectWithValue}) => {
    try {
      await createBook(data);
      await dispatch(bookListFetch());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
)

export const bookItemUpdate = createAsyncThunk(
  updateThunkName,
  async (payload, {dispatch , rejectWithValue}) => {
    const {data, id} = payload;
    try {
     await updateBook(data, id) ;
     await dispatch(bookListFetch());
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
)


