import paginationReducer, {
  bookPaginationAction,
  initialState,
} from "./pagination";

describe("pagination reducer", () => {
  it("should handle bookPaginationAction", () => {
    const payload = {
      page: 2,
      offset: 18,
    };
    expect(
      paginationReducer(initialState, bookPaginationAction(payload))
    ).toEqual({
      ...initialState,
      ...payload,
    });
  });
});
