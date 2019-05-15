import {
  UPDATE_NAME_REQUEST,
  UPDATE_EMAIL_REQUEST,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PROFILE_PHOTO_URL_REQUEST,
  TOGGLE_DARK_MODE
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

export const updateProfilePhotoURL = (payload, meta) => {
  return {
    payload,
    meta,
    type: UPDATE_PROFILE_PHOTO_URL_REQUEST
  };
};

export const toggleDarkMode = payload => {
  return {
    payload,
    type: TOGGLE_DARK_MODE
  };
};
