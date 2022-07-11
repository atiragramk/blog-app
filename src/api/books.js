import { client } from "./client";

export const getAllBooks = async () => {
  try {
    return await client.get("/Books");
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBook = async (id) => {
  try {
    return await client.get(`/Books/${id}`);
  } catch (error) {
    return Promise.reject(error);
  }
};
