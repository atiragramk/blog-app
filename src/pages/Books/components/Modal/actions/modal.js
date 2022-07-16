export function deleteOpen(state, action) {
  state.open = !action.payload;
}


export function modalLoadingSet(state, action) {
  state.loading = action.payload;
}

export function createOpen(state, action) {
  state.open = !action.payload;
}

export function createLoadingSet(state, action) {
  state.loading = action.payload;
}

export function updateOpen(state, action) {
  state.open = !action.payload;
}