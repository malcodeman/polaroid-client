export const FIND_ME_REQUEST = "FIND_ME_REQUEST";
export const FIND_ME_SUCCESS = "FIND_ME_SUCCESS";
export const FIND_ME_FAILURE = "FIND_ME_FAILURE";
export const UPDATE_ME_REQUEST = "UPDATE_ME_REQUEST";
export const UPDATE_ME_SUCCESS = "UPDATE_ME_SUCCESS";
export const UPDATE_ME_FAILURE = "UPDATE_ME_FAILURE";
export const UNLOAD_ME = "UNLOAD_ME";

export const FIND_USER_BY_USERNAME_REQUEST = "FIND_USER_BY_USERNAME_REQUEST";
export const FIND_USER_BY_USERNAME_SUCCESS = "FIND_USER_BY_USERNAME_SUCCESS";
export const FIND_USER_BY_USERNAME_FAILURE = "FIND_USER_BY_USERNAME_FAILURE";
export const UNLOAD_USER = "UNLOAD_USER";

export const CHANGE_THEME = "CHANGE_THEME";

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

export const updateMe = data => {
  return {
    type: UPDATE_ME_REQUEST,
    payload: {
      data
    }
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

export const unloadUser = () => {
  return {
    type: UNLOAD_USER
  };
};
