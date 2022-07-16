import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../../api/books";

const name = "BOOK_LIST_FETCH";

export const bookListFetch = createAsyncThunk(name, async (_, {rejectWithValue}) => {
  try {
    return await getAllBooks();
  } catch (error) {
    return rejectWithValue(error.data);
  }
});
