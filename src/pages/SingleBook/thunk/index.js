import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBook } from "../../../api/books";

export const bookItemFetch = createAsyncThunk("bookItemFetch", async (id) => {
  return await getBook(id);
});
