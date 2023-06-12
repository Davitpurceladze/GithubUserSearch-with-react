import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.github.com/users/",
});

export default axiosClient;
