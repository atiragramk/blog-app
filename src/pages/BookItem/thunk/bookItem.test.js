import { BOOK_ITEM_FETCH_THUNK_TYPE, bookItemFetch } from "./bookItem";
import { createAsyncThunk } from "@reduxjs/toolkit";

describe("bookItemFetch", () => {
  it("creates the action types", () => {
    expect(bookItemFetch.fulfilled.type).toBe(
      `${BOOK_ITEM_FETCH_THUNK_TYPE}/fulfilled`
    );
    expect(bookItemFetch.pending.type).toBe(
      `${BOOK_ITEM_FETCH_THUNK_TYPE}/pending`
    );
    expect(bookItemFetch.rejected.type).toBe(
      `${BOOK_ITEM_FETCH_THUNK_TYPE}/rejected`
    );
  });

  it("exposes the typePrefix it was created with", () => {
    expect(bookItemFetch.typePrefix).toBe(BOOK_ITEM_FETCH_THUNK_TYPE);
  });

  it("accepts arguments and dispatches the actions on resolve", async () => {
    const dispatch = jest.fn();

    const result = {
      _id: "62d1a5dc24b620e6ec8cb078",
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      publishDate: "2022-07-15T08:38:54.811Z",
      pageCount: "341",
      createdAt: "2022-07-15T17:37:32.209Z",
      updatedAt: "2022-07-22T13:17:01.345Z",
    };
    const bookItemFetch = createAsyncThunk(
      BOOK_ITEM_FETCH_THUNK_TYPE,
      async (id, { rejectWithValue }) => {
        try {
          return result;
        } catch (error) {
          return rejectWithValue(error.data);
        }
      }
    );
    const args = "62d1a5dc24b620e6ec8cb078";
    const thunkFunction = bookItemFetch(args);
    const thunkPromise = thunkFunction(dispatch, () => {}, undefined);
    expect(thunkPromise.arg).toBe(args);

    await thunkPromise;
    const itemFetchParams = [thunkPromise.requestId, args];

    expect(dispatch).toHaveBeenNthCalledWith(
      1,
      bookItemFetch.pending(...itemFetchParams)
    );
    expect(dispatch).toHaveBeenNthCalledWith(
      2,
      bookItemFetch.fulfilled(result, thunkPromise.requestId, args)
    );
  });

  it("dispatches a rejected action with a customized payload when a user returns rejectWithValue()", async () => {
    const dispatch = jest.fn();

    const args = "62d1a5dc24b620e6ec8cb078";
    const errorPayload = {
      errorMessage: "Bad request",
    };

    const bookItemFetch = createAsyncThunk(
      BOOK_ITEM_FETCH_THUNK_TYPE,
      async (id, { rejectWithValue }) => {
        return rejectWithValue(errorPayload);
      }
    );
    const thunkFunction = bookItemFetch(args);

    try {
      await thunkFunction(dispatch, () => {}, undefined);
    } catch (e) {}

    const errorAction = dispatch.mock.calls[1][0];

    expect(errorAction.error.message).toEqual("Rejected");
    expect(errorAction.payload).toBe(errorPayload);
    expect(errorAction.meta.arg).toBe(args);
  });
});
