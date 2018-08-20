import {
  UPDATE_NAME_REQUEST,
  UPDATE_USERNAME_REQUEST,
  UPDATE_EMAIL_REQUEST
} from "./settingsActionTypes";

export const updateName = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_NAME_REQUEST
  };
};

export const updateUsername = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_USERNAME_REQUEST
  };
};

export const updateEmail = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_EMAIL_REQUEST
  };
};
