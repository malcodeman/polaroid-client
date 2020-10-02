import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { ProfilePhoto, NameFirstLetter } from "../styles/postsStyles";

import { createComment } from "../actions/postsActionCreators";
import { useDispatch } from "react-redux";

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 56px;
  border-top: 1px solid ${(props) => props.theme.borderColor};
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
  body: Yup.string().required("Comment can't be empty"),
});

const CommentForm = (props) => {
  const { me, postId } = props;
  const dispatch = useDispatch();
  const initialValues = {
    postId,
    body: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit() {
    const payload = {
      postId,
      body: formik.values.body,
    };

    dispatch(createComment(payload));
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
        name="body"
        placeholder="Add a comment..."
        value={formik.values.body}
        onChange={formik.handleChange}
      />
    </StyledForm>
  );
};

export default CommentForm;
