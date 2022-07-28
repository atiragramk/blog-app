import bookListReducer, {
  bookCreateInProgressAction,
  bookCreateSuccessAction,
  bookCreateErrorAction,
  bookUpdateItemIdSetAction,
  bookUpdateInProgressAction,
  bookUpdateSuccessAction,
  bookUpdateErrorAction,
  bookDeleteItemDataSetAction,
  bookDeleteInProgressAction,
  bookDeleteSuccessAction,
  bookDeleteErrorAction,
  bookListResetAction,
  bookListUpdateResetAction,
  bookListDeleteResetAction,
} from "./bookList";
import { initialState } from "./bookList";
import { bookListFetch, bookItemUpdateDataFetch } from "../thunk/bookList";

describe("bookList reducer", () => {
  it("should handle bookCreateInProgress", () => {
    expect(bookListReducer(initialState, bookCreateInProgressAction())).toEqual(
      {
        ...initialState,
        createState: {
          ...initialState.createState,
          loading: true,
          error: false,
        },
      }
    );
  });
  it("should handle bookCreateSuccess", () => {
    expect(bookListReducer(initialState, bookCreateSuccessAction())).toEqual({
      ...initialState,
      createState: { ...initialState.createState, loading: false },
    });
  });
  it("should handle bookCreateError", () => {
    expect(bookListReducer(initialState, bookCreateErrorAction())).toEqual({
      ...initialState,
      createState: { ...initialState.createState, loading: false, error: true },
    });
  });
  it("should handle bookUpdateItemIdSet", () => {
    const id = "62d1a5dc24b620e6ec8cb078";
    expect(
      bookListReducer(initialState, bookUpdateItemIdSetAction({ id }))
    ).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState, fetchData: { id } },
    });
  });
  it("should handle bookUpdateInProgress", () => {
    expect(bookListReducer(initialState, bookUpdateInProgressAction())).toEqual(
      {
        ...initialState,
        updateState: {
          ...initialState.updateState,
          loading: true,
          error: false,
        },
      }
    );
  });
  it("should handle bookUpdateSuccess", () => {
    expect(bookListReducer(initialState, bookUpdateSuccessAction())).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState, loading: false },
    });
  });
  it("should handle bookUpdateError", () => {
    expect(bookListReducer(initialState, bookUpdateErrorAction())).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState, loading: false, error: true },
    });
  });
  it("should handle bookDeleteItemDataSet", () => {
    const data = {
      _id: "62d1a5dc24b620e6ec8cb078",
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      publishDate: "2022-07-15T08:38:54.811Z",
      pageCount: "341",
      createdAt: "2022-07-15T17:37:32.209Z",
      updatedAt: "2022-07-22T13:17:01.345Z",
    };
    expect(
      bookListReducer(initialState, bookDeleteItemDataSetAction({ data }))
    ).toEqual({
      ...initialState,
      deleteState: { ...initialState.deleteState, data: { data } },
    });
  });
  it("should handle bookDeleteInProgress", () => {
    expect(bookListReducer(initialState, bookDeleteInProgressAction())).toEqual(
      {
        ...initialState,
        deleteState: {
          ...initialState.deleteState,
          loading: true,
          error: false,
        },
      }
    );
  });
  it("should handle bookDeleteSuccess", () => {
    expect(bookListReducer(initialState, bookDeleteSuccessAction())).toEqual({
      ...initialState,
      deleteState: {
        ...initialState.deleteState,
        loading: false,
      },
    });
  });
  it("should handle bookDeleteError", () => {
    expect(bookListReducer(initialState, bookDeleteErrorAction())).toEqual({
      ...initialState,
      deleteState: {
        ...initialState.deleteState,
        loading: false,
        error: true,
      },
    });
  });
  it("should handle bookListReset", () => {
    expect(bookListReducer(initialState, bookListResetAction())).toEqual({
      ...initialState,
    });
  });
  it("should handle bookListUpdateReset", () => {
    expect(bookListReducer(initialState, bookListUpdateResetAction())).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState },
    });
  });
  it("should handle bookListDeleteReset", () => {
    expect(bookListReducer(initialState, bookListDeleteResetAction())).toEqual({
      ...initialState,
      deleteState: { ...initialState.deleteState },
    });
  });

  it("should handle bookListFetch pending", () => {
    expect(bookListReducer(initialState, bookListFetch.pending())).toEqual({
      ...initialState,
      loading: true,
      error: false,
    });
  });

  it("should handle bookListFetch fulfilled", () => {
    const data = [
      {
        _id: "62d1a5dc24b620e6ec8cb078",
        title: "Magnam modi perferendis quam non sunt",
        description:
          "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
        publishDate: "2022-07-15T08:38:54.811Z",
        pageCount: "341",
        createdAt: "2022-07-15T17:37:32.209Z",
        updatedAt: "2022-07-22T13:17:01.345Z",
      },
    ];
    expect(
      bookListReducer(initialState, bookListFetch.fulfilled(data))
    ).toEqual({
      ...initialState,
      loading: false,
      data,
    });
  });
  it("should handle bookListFetch rejected", () => {
    expect(bookListReducer(initialState, bookListFetch.rejected())).toEqual({
      ...initialState,
      loading: false,
      error: true,
    });
  });

  it("should handle bookItemUpdateDataFetch pending", () => {
    expect(
      bookListReducer(initialState, bookItemUpdateDataFetch.pending())
    ).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState, loading: true, error: false },
    });
  });

  it("should handle bookItemUpdateDataFetch fulfilled", () => {
    const data = {
      _id: "62d1a5dc24b620e6ec8cb078",
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      publishDate: "2022-07-15T08:38:54.811Z",
      pageCount: "341",
      createdAt: "2022-07-15T17:37:32.209Z",
      updatedAt: "2022-07-22T13:17:01.345Z",
    };
    expect(
      bookListReducer(initialState, bookItemUpdateDataFetch.fulfilled(data))
    ).toEqual({
      ...initialState,
      updateState: {
        ...initialState.updateState,
        loading: false,
        data: { ...data },
        error: false,
      },
    });
  });
  it("should handle bookItemUpdateDataFetch rejected", () => {
    expect(
      bookListReducer(initialState, bookItemUpdateDataFetch.rejected())
    ).toEqual({
      ...initialState,
      updateState: { ...initialState.updateState, loading: false, error: true },
    });
  });
});
