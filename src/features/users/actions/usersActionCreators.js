import {
  CHANGE_THEME,
  FIND_ME_REQUEST,
  FIND_USER_BY_USERNAME_REQUEST
} from "./usersActionTypes";

export const changeTheme = newTheme => {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  };
};

export const findMe = () => {
  return {
    type: FIND_ME_REQUEST
  };
};

export const findUserByUsername = username => {
  return {
    type: FIND_USER_BY_USERNAME_REQUEST,
    payload: {
      username
    }
  };
};
