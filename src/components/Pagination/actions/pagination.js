export function bookPagination(state, action) {
  return { ...state, ...action.payload };
}
