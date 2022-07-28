import { initialState } from "../reducer/bookList";

export const bookCreateInProgress = (state) => {
  state.createState.loading = true;
  state.createState.error = false;
};
export const bookCreateSuccess = (state) => {
  state.createState.loading = false;
};
export const bookCreateError = (state) => {
  state.createState.loading = false;
  state.createState.error = true;
};

export const bookUpdateItemIdSet = (state, action) => {
  state.updateState.fetchData = action.payload;
};
export const bookUpdateInProgress = (state) => {
  state.updateState.loading = true;
  state.updateState.error = false;
};
export const bookUpdateSuccess = (state) => {
  state.updateState.loading = false;
};

export const bookUpdateError = (state) => {
  state.updateState.loading = false;
  state.updateState.error = true;
};

export const bookDeleteItemDataSet = (state, action) => {
  state.deleteState.data = action.payload;
};

export const bookDeleteInProgress = (state) => {
  state.deleteState.loading = true;
  state.deleteState.error = false;
};
export const bookDeleteSuccess = (state) => {
  state.deleteState.loading = false;
};
export const bookDeleteError = (state) => {
  state.deleteState.loading = false;
  state.deleteState.error = true;
};

export const bookListReset = (state) => {
  state = initialState;
};

export const bookListUpdateReset = (state) => {
  state.updateState = initialState.updateState;
};

export const bookListDeleteReset = (state) => {
  state.deleteState = initialState.deleteState;
};
