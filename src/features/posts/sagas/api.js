import axios from "../../../core/http";

export const getPosts = () => {
  return axios.get(`/posts`);
};

export const createPost = newPost => {
  return axios.post(`/posts`, newPost);
};
