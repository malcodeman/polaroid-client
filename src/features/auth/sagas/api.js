import axios from "../../../core/http";

export const signup = newUser => {
  return axios.post(`auth/signup`, newUser);
};

export const login = user => {
  return axios.post(`/auth/login`, user);
};

export const logout = user => {
  return axios.post(`/auth/logout`, user);
};
