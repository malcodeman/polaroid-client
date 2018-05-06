import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const saveUser = newUser => {
  return axios.post(`${API_URL}/users`, newUser);
};
