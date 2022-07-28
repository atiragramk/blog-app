import modalReducer, { modalOpenToggleAction, initialState } from "./modal";

describe("modal reducer", () => {
  it("should handle modalOpenToggleAction", () => {
    const name = "MODAL_DELETE_NAME";
    expect(modalReducer(initialState, modalOpenToggleAction({ name }))).toEqual(
      { open: !initialState.open, name }
    );
  });
});
