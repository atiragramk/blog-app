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
