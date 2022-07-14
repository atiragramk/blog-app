import axios from "axios";

export const client = axios.create({
    // baseURL: "https://fakerestapi.azurewebsites.net/api/v1"
    baseURL: "http://localhost:80/api/v1"

});

client.interceptors.response.use(
    (response) => response.data.data, 
    (error) => Promise.reject(error));