import {
  FIND_ME_REQUEST,
  FIND_SUGGESTIONS_REQUEST,
  FIND_USER_BY_USERNAME_REQUEST
} from "./usersActionTypes";

export const findMe = () => {
  return {
    type: FIND_ME_REQUEST
  };
};

export const findSuggestions = () => {
  return {
    type: FIND_SUGGESTIONS_REQUEST
  };
};

export const findUserByUsername = username => {
  return {
    type: FIND_USER_BY_USERNAME_REQUEST,
    payload: username
  };
};
