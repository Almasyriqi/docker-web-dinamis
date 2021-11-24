import axios from "axios";
import dotenv from "dotenv";

const api = axios.create({
 baseURL: process.env.REACT_APP_API_BASE_URL || "http://140.238.207.29:4000",
});

export default api;