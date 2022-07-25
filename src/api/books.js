// @ts-check
import { client } from "./client";
/**
 * Get a list book
 * @async
 * @returns {Promise<array>}- A promise that contains the list of book when fulfilled.
 * @throws {Error}
 */

export const getAllBooks = async () => {
  try {
    return await client.get("/books");
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * Get a single book
 * @async
 * @param {string} id - id of a book
 * @returns {Promise<object>} - A promise that contains book data when fulfilled.
 * @throws {Error}
 */

export const getBook = async (id) => {
  try {
    return await client.get(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Delete a single book
 * @async
 * @param {string} id - book id
 * @returns {Promise<object>} - A promise that contains book data when fulfilled.
 * @throws {Error}
 */

export const deleteBook = async (id) => {
  try {
    return await client.delete(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
/**
 * Create a single book
 * @async
 * @param {{title: string, description: string, pageCount: number}} data - book data
 * @returns {Promise<object>} - A promise that contains book data when fulfilled.
 * @throws {Error}
 */

export const createBook = async (data) => {
  try {
    return await client.post("/books", { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * Update a single book
 * @async
 * @param {{title: string, description: string, pageCount: number}} data - - book data
 * @param {string} id - book id
 * @returns {Promise<object>} - A promise that contains book data when fulfilled.
 * @throws {Error}
 */

export const updateBook = async (data, id) => {
  try {
    return await client.patch(`/books/${id}`, { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};
