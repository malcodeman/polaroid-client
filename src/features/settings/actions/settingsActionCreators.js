import {
  UPDATE_NAME_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_PASSWORD_REQUEST
} from "./settingsActionTypes";

export const updateName = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_NAME_REQUEST
  };
};

export const updateEmail = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_EMAIL_REQUEST
  };
};

export const updatePassword = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_PASSWORD_REQUEST
  };
};
