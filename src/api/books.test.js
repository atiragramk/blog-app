import { client } from "./client";

import {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} from "./books";

jest.mock("axios", () => {
  return {
    create: jest.fn(() => ({
      get: jest.fn(),
      post: jest.fn(),
      patch: jest.fn(),
      delete: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn() },
        error: { use: jest.fn(), eject: jest.fn() },
      },
    })),
  };
});

describe("getAllBooks", () => {
  it("fetch data from an API success", async () => {
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
      {
        _id: "62d1a5dc24b620e6ec8cb07a",
        title: "A iste dignissimos nade",
        description:
          "Quisquam ea et necessitatibus provident corrupti. Sed et quas laboriosam quae natus et nisi quia dignissimos. Inventore sunt qui aut reprehenderit omnis quo quia aliquid quia.",
        publishDate: "2022-07-15T08:38:54.811Z",
        pageCount: "988",
        createdAt: "2022-07-15T17:37:32.730Z",
        updatedAt: "2022-07-22T13:16:00.908Z",
      },
    ];

    client.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getAllBooks()).resolves.toEqual(data);
  });

  it("fetch data from an API error", async () => {
    const errorMessage = "Network Error";

    client.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getAllBooks).rejects.toThrow(errorMessage);
  });
});

describe("getBook", () => {
  it("fetch data from an API success", async () => {
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
    const id = "62d1a5dc24b620e6ec8cb078";

    client.get.mockImplementationOnce(() => Promise.resolve(data));
    await expect(getBook(id)).resolves.toEqual(data);
  });

  it("fetch data from an API error", async () => {
    const errorMessage = "Network Error";
    const id = "62d1a5dc24b620e6ec8cb078";

    client.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(getBook(id)).rejects.toThrow(errorMessage);
  });
});

describe("createBook", () => {
  it("fetch data from an API success", async () => {
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
    const values = {
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      pageCount: "341",
    };

    client.post.mockImplementationOnce(() => Promise.resolve(data));
    await expect(createBook(values)).resolves.toEqual(data);
  });

  it("fetch data from an API error", async () => {
    const errorMessage = "Network Error";
    const values = {
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      pageCount: "341",
    };

    client.post.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(createBook(values)).rejects.toThrow(errorMessage);
  });
});

describe("updateBook", () => {
  it("fetch data from an API success", async () => {
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
    const values = {
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      pageCount: "341",
    };
    const id = "62d1a5dc24b620e6ec8cb078";

    client.patch.mockImplementationOnce(() => Promise.resolve(data));
    await expect(updateBook(values, id)).resolves.toEqual(data);
  });

  it("fetch data from an API error", async () => {
    const errorMessage = "Network Error";
    const values = {
      title: "Magnam modi perferendis quam non sunt",
      description:
        "Et fugiat vitae delectus quia. Molestias rem eius voluptatum. Omnis maxime et aut pariatur illum aut.",
      pageCount: "341",
    };
    const id = "62d1a5dc24b620e6ec8cb078";

    client.patch.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(updateBook(values, id)).rejects.toThrow(errorMessage);
  });
});

describe("deleteBook", () => {
  it("fetch data from an API success", async () => {
    const data = {
      message: "Book was deleted",
    };
    const id = "62d1a5dc24b620e6ec8cb078";

    client.delete.mockImplementationOnce(() => Promise.resolve(data));
    await expect(deleteBook(id)).resolves.toEqual(data);
  });

  it("fetch data from an API error", async () => {
    const errorMessage = "Network Error";
    const id = "62d1a5dc24b620e6ec8cb078";

    client.delete.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );
    await expect(deleteBook(id)).rejects.toThrow(errorMessage);
  });
});
