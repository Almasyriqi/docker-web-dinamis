import axios from "axios";
// import env from "react-dotenv";

const api = axios.create({
 baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;