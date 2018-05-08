import axios from "axios";
axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = () => {
  return axios.get(`${API_URL}/users`);
};
