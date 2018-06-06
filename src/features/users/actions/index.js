export const FIND_ME_REQUEST = "FIND_ME_REQUEST";
export const FIND_ME_SUCCESS = "FIND_ME_SUCCESS";
export const FIND_ME_FAILURE = "FIND_ME_FAILURE";

export const UNLOAD_ME = "UNLOAD_ME";

export const findMe = () => {
  return {
    type: FIND_ME_REQUEST
  };
};
