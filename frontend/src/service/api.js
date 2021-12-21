import axios from "axios";

const api = axios.create({
 baseURL: "152.67.108.96:4000",
});

export default api;