import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllBooks } from "../../../api/books";

const BOOK_STATISTIC_FETCH_THUNK_TYPE = "BOOK_STATISTIC_FETCH_THUNK_TYPE";

export const bookListStatisticFetch = createAsyncThunk(
  BOOK_STATISTIC_FETCH_THUNK_TYPE,
  async (_, { rejectWithValue }) => {
    try {
      return await getAllBooks();
    } catch (error: any) {
      return rejectWithValue(error.data);
    }
  }
);
