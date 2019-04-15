import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { connect } from "react-redux";

import Loader from "../../loader/components/Loader";

import { createPost } from "../actions/postsActionCreators";

const StyledForm = styled(Form)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const Error = styled.div`
  font-size: 0.8rem;
  color: #fff;
  background-color: #b00e23;
  padding: 4px;
  margin: 4px 0;
  align-self: flex-start;
`;

const PhotoPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const PhotoPreview = styled.img`
  object-fit: cover;
  height: auto;
  max-height: 256px;
  border-radius: 2px;
  @media (min-width: 576px) {
    max-height: 512px;
  }
`;

const PhotoPreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${props => (props.primary ? "#007aff" : "rgba(0,0,0,.4)")};
  &:disabled {
    background-color: rgba(0, 122, 255, 0.4);
    cursor: default;
  }
`;

class FormikForm extends Component {
  // TODO: add validPhoto() check to yup
  getFileExtension = url => {
    return url.split(".").pop();
  };
  validPhoto = url => {
    switch (this.getFileExtension(url)) {
      case "jpg":
      case "png":
        return true;
      default:
        return false;
    }
  };
  render() {
    const { errors, touched, resetForm, submitForm, isSubmitting } = this.props;
    const { photoURL } = this.props.values;
    if (isSubmitting) {
      return <Loader />;
    } else if (
      photoURL &&
      !isSubmitting &&
      !errors.photoURL &&
      this.validPhoto(photoURL)
    ) {
      return (
        <StyledForm>
          <PhotoPreviewWrapper>
            <PhotoPreview src={photoURL} />
            <PhotoPreviewFooter>
              <Button onClick={resetForm} data-cy="photo-url-close">
                Close
              </Button>
              <Button primary onClick={submitForm} data-cy="photo-url-submit">
                Upload
              </Button>
            </PhotoPreviewFooter>
          </PhotoPreviewWrapper>
        </StyledForm>
      );
    } else {
      return (
        <StyledForm>
          <Input
            type="text"
            name="photoURL"
            placeholder="Paste a URL"
            data-cy="photo-url-input"
          />
          {touched.photoURL && errors.photoURL && (
            <Error>{errors.photoURL}</Error>
          )}
        </StyledForm>
      );
    }
  }
}

const PostNewForm = withFormik({
  mapPropsToValues: props => ({
    photoURL: props.text || ""
  }),
  validationSchema: Yup.object().shape({
    photoURL: Yup.string()
      .required("Photo URL can't be empty")
      .url("Not a valid URL")
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
