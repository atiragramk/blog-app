// @ts-check
import { TBook } from "../types/pages";
import { client } from "./client";

export const getAllBooks = async () => {
  try {
    return await client.get<never, TBook[]>("/books");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBook = async (id: string | undefined) => {
  try {
    return await client.get<never, TBook>(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (id: string) => {
  try {
    return await client.delete(`/books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const createBook = async (data: Partial<TBook>) => {
  try {
    return await client.post<never, TBook>("/books", { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBook = async (data: TBook, id: string) => {
  try {
    return await client.patch<never, TBook>(`/books/${id}`, { ...data });
  } catch (error) {
    return Promise.reject(error);
  }
};
