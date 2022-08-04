import { PayloadAction } from "@reduxjs/toolkit";
import { TBook, TBookListState, TFetchData } from "../../../types/pages";
import { initialState } from "../reducer/bookList";

export const bookCreateInProgress = (state: TBookListState) => {
  state.createState.loading = true;
  state.createState.error = false;
};
export const bookCreateSuccess = (state: TBookListState) => {
  state.createState.loading = false;
};
export const bookCreateError = (state: TBookListState) => {
  state.createState.loading = false;
  state.createState.error = true;
};

export const bookUpdateItemIdSet = (
  state: TBookListState,
  action: PayloadAction<TFetchData>
) => {
  state.updateState.fetchData = action.payload;
};
export const bookUpdateInProgress = (state: TBookListState) => {
  state.updateState.loading = true;
  state.updateState.error = false;
};
export const bookUpdateSuccess = (state: TBookListState) => {
  state.updateState.loading = false;
};

export const bookUpdateError = (state: TBookListState) => {
  state.updateState.loading = false;
  state.updateState.error = true;
};

export const bookDeleteItemDataSet = (
  state: TBookListState,
  action: PayloadAction<TBook>
) => {
  state.deleteState.data = action.payload;
};

export const bookDeleteInProgress = (state: TBookListState) => {
  state.deleteState.loading = true;
  state.deleteState.error = false;
};
export const bookDeleteSuccess = (state: TBookListState) => {
  state.deleteState.loading = false;
};
export const bookDeleteError = (state: TBookListState) => {
  state.deleteState.loading = false;
  state.deleteState.error = true;
};

export const bookListReset = (state: TBookListState) => {
  state = initialState;
};

export const bookListUpdateReset = (state: TBookListState) => {
  state.updateState = initialState.updateState;
};

export const bookListDeleteReset = (state: TBookListState) => {
  state.deleteState = initialState.deleteState;
};
