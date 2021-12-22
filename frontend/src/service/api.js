import axios from "axios";
import env from "react-dotenv";

const api = axios.create({
 baseURL: "http://152.67.108.96:4000",
});

export default api;