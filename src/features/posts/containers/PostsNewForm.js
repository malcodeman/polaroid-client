import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import { ProfilePhoto, NameFirstLetter } from "../styles/postsStyles";
import { createPost } from "../actions/postsActionCreators";

const StyledForm = styled(Form)`
  display: flex;
  padding: 16px;
  align-items: center;
  margin-bottom: 24px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.backgroundSecondary};
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
      <Input
        type="text"
        name="photoURL"
        placeholder="Paste a URL"
        data-cy="photo-url-input"
      />
    </StyledForm>
  );
};

const PostNewForm = withFormik({
  validationSchema: Yup.object().shape({
    photoURL: Yup.string()
      .required("Photo URL can't be empty")
      .url("Not a valid URL")
  }),
  mapPropsToValues: props => ({
    photoURL: props.photoURL || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.createPost(payload, {
      setSubmitting: bag.setSubmitting,
      resetForm: bag.resetForm
    });
  }
})(FormikForm);

export default connect(
  null,
  { createPost }
)(PostNewForm);
