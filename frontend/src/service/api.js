import axios from "axios";
//import env from "react-dotenv";

const api = axios.create({
 baseURL: "http://152.69.161.150:4000",
});

export default api;