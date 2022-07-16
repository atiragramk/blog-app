import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../api/books";


const name = "BOOK_ITEM_FETCH"
export const bookItemFetch = createAsyncThunk(name, async (id, {rejectWithValue}) => {
  try {
    return await getBook(id);
  } catch (error) {
    return rejectWithValue(error.data);
  }
});
