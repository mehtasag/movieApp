import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/movieapp2021-8ad8c/us-central1/api",
});
export default instance;
