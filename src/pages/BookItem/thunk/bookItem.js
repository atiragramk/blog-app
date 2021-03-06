import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../api/books";

export const BOOK_ITEM_FETCH_THUNK_TYPE = "BOOK_ITEM_FETCH_THUNK_TYPE";
export const bookItemFetch = createAsyncThunk(
  BOOK_ITEM_FETCH_THUNK_TYPE,
  async (id, { rejectWithValue }) => {
    try {
      return await getBook(id);
    } catch (error) {
      return rejectWithValue(error.data);
    }
  }
);
