import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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

class FormikForm extends Component {
  componentDidUpdate = prevProps => {
    if (
      prevProps.createPostTrigger === false &&
      prevProps.createPostTrigger !== this.props.createPostTrigger
    ) {
      this.props.submitForm();
      this.props.createPostClear();
    }
  };
  render() {
    const { errors, touched } = this.props;
    return (
      <StyledForm>
        <FormItem>
          <Input type="text" name="photoURL" />
          {touched.photoURL &&
            errors.photoURL && <Error>{errors.photoURL}</Error>}
        </FormItem>
      </StyledForm>
    );
  }
}

const PostNewForm = withFormik({
  mapPropsToValues: props => ({
    photoURL: props.text || ""
  }),
  validationSchema: Yup.object().shape({
    photoURL: Yup.string().required("Photo URL can't be empty")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createPost(payload);
    bag.resetForm();
  }
})(FormikForm);

export default PostNewForm;
