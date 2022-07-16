import { createSlice } from "@reduxjs/toolkit";

import { bookItemDelete } from "../thunk/modal";
import { deleteOpen, modalLoadingSet} from "../actions/modal";
const name = "DELETE_MODAL";

const initialState = {
  open: false,
  loading: false,
  error: null,
};

const deleteModalSlice = createSlice({
  name,
  initialState,
  reducers: {
    deleteModalOpen: deleteOpen,
    deleteModalLoading: modalLoadingSet,
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookItemDelete.pending, (state) => {
        state.loadingModal = true;
        state.errorModal = null;
      })
      .addCase(bookItemDelete.fulfilled, (state) => {
        state.loadingModal = false;
      })
      .addCase(bookItemDelete.rejected, (state) => {
        state.loadingModal = false;
        state.errorModal = true;
      });
  },
});

export const { deleteModalSetId, deleteModalOpen,deleteModalSetTitle, deleteModalLoading } = deleteModalSlice.actions;

export default deleteModalSlice.reducer;
