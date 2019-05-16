import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { ProfilePhoto, NameFirstLetter } from "../styles/postsStyles";

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 56px;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const Input = styled(Field)`
  min-height: 36px;
  font-size: 0.8rem;
  outline: 0;
  border: 0;
  width: 100%;
  padding: 8px 12px;
  border-radius: 16px;
  border: 0;
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.backgroundPrimary};
`;

const FormikForm = props => {
  const { me } = props;

  return (
    <StyledForm>
      {me.profilePhotoURL ? (
        <ProfilePhoto src={me.profilePhotoURL} />
      ) : (
        <NameFirstLetter>{me.nameFirstLetter}</NameFirstLetter>
      )}
      <Input type="text" name="body" placeholder="Add a comment..." />
    </StyledForm>
  );
};

const CommentForm = withFormik({
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Comment can't be empty")
  }),
  mapPropsToValues: props => ({
    postId: props.postId,
    body: props.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createComment(payload);
    bag.resetForm();
  }
})(FormikForm);

export default CommentForm;
