import axios from "axios";

const api = axios.create({
 baseURL: "http://152.67.108.96:4000",
});

export default api;