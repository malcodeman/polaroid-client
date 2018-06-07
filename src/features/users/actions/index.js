export const FIND_ME_REQUEST = "FIND_ME_REQUEST";
export const FIND_ME_SUCCESS = "FIND_ME_SUCCESS";
export const FIND_ME_FAILURE = "FIND_ME_FAILURE";
export const UNLOAD_ME = "UNLOAD_ME";

export const FIND_USER_BY_USERNAME_REQUEST = "FIND_USER_BY_USERNAME_REQUEST";
export const FIND_USER_BY_USERNAME_SUCCESS = "FIND_USER_BY_USERNAME_SUCCESS";
export const FIND_USER_BY_USERNAME_FAILURE = "FIND_USER_BY_USERNAME_FAILURE";

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
