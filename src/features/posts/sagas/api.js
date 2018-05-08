import axios from "../../../state/axios";

export const getPosts = () => {
  return axios.get(`/posts`);
};
