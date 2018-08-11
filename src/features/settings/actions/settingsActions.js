import { SET_NAME_REQUEST } from "./settingsActionTypes";

export const setName = (payload, meta) => {
  return {
    payload,
    meta,
    type: SET_NAME_REQUEST
  };
};
