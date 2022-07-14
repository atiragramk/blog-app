export function bookFetchStart() {}

export function bookFetchInProgress(state) {
  state.loading = true;
  state.error = null;
}

export function bookFetchSuccess(state, action) {
  state.loading = false;
  state.data = action.payload;
}

export function bookFetchError(state) {
  state.loading = false;
  state.error = true;
}

export function bookPagination(state, action) {
  return { ...state, ...action.payload };
}
