import { client } from "./client";

export const getAllBooks = async () => {
  try {
    return await client.get("/books");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBook = async (id) => {
  try {
    return await client.get(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (id) => {
  try {
    return await client.delete(`/books/${id}`)
  } catch (error) {
    return Promise.reject(error);
  }
}

export const createBook = async (data) => {
  try {
    return await client.post("/books", {...data})
  } catch (error) {
    return Promise.reject(error);
  }
}

export const updateBook = async (data, id) => {
  try {
    return await client.patch(`/books/${id}`, {...data})
  } catch (error) {
    return Promise.reject(error);
  }
}
