import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getPosts = () => {
  return axios.get(`${API_URL}/posts`);
};
