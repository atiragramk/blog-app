import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteBook } from "../../../api/books";

export const bookListDelete = createAsyncThunk("bookItemDelete", async (id) => {
  return await deleteBook(id);
});
