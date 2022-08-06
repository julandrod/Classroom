import axios from "axios";

export const baseURL = "http://localhost:5000/api/v1/";

export const axiosInstance = axios.create({ baseURL });
