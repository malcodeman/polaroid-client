import axios from "../../../state/axios";

export const saveUser = newUser => {
  return axios.post(`auth/signup`, newUser);
};

export const login = user => {
  return axios.post(`/auth/login`, user);
};

export const signout = user => {
  return axios.post(`/auth/signout`, user);
};
