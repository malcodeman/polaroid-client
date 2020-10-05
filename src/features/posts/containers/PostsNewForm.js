import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { ProfilePhoto, NameFirstLetter } from "../styles/postsStyles";
import { createPost } from "../actions/postsActionCreators";

const StyledForm = styled.form`
  display: flex;
  padding: 16px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundSecondary};
`;

const Input = styled.input`
  min-height: 36px;
  font-size: 0.8rem;
  outline: 0;
  border: 0;
  width: 100%;
  padding: 8px 12px;
  border-radius: 16px;
  border: 0;
  color: ${(props) => props.theme.primary};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const validationSchema = Yup.object().shape({
  photoURL: Yup.string()
    .required("Photo URL can't be empty")
    .url("Not a valid URL"),
});
const initialValues = {
  photoURL: "",
};

const PostNewForm = (props) => {
  const { me } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      setSubmitting: formik.setSubmitting,
      resetForm: formik.resetForm,
    };

    dispatch(createPost(formik.values, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      {me.profilePhotoURL ? (
        <ProfilePhoto src={me.profilePhotoURL} />
      ) : (
        <NameFirstLetter>{me.nameFirstLetter}</NameFirstLetter>
      )}
      <Input
        type="text"
        name="photoURL"
        placeholder="Paste a URL"
        data-cy="photo-url-input"
        value={formik.values.photoURL}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    </StyledForm>
  );
};

export default PostNewForm;
