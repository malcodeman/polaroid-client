export const SAVE_USER_REQUEST = "SAVE_USER_REQUEST";
export const SAVE_USER_SUCCESS = "SAVE_USER_SUCCESS";
export const SAVE_USER_FAILURE = "SAVE_USER_FAILURE";

export const saveUser = newUser => {
  return {
    type: SAVE_USER_REQUEST,
    payload: newUser
  };
};
