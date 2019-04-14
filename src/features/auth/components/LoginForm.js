import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Loader from "../../loader/components/Loader";
import { login } from "../actions/authActionCreators";
import {
  StyledForm,
  FormItem,
  Input,
  ErrorMessage,
  Button
} from "../styles/authStyles";

const FormikForm = props => {
  const { errors, touched, isSubmitting } = props;

  return (
    <StyledForm>
      <FormItem>
        <Input type="text" name="username" placeholder="Username or email" />
        {touched.username && errors.username && (
          <ErrorMessage>{errors.username}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Input type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
      </FormItem>
      <Button disabled={isSubmitting}>
        {isSubmitting ? <Loader /> : "Log in"}
      </Button>
      <ErrorMessage>{errors.general}</ErrorMessage>
    </StyledForm>
  );
};

const LoginForm = withFormik({
  mapPropsToValues: props => ({
    username: props.username || "",
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Username or email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.props.login(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      history: bag.props.history
    });
  }
})(FormikForm);

export default withRouter(
  connect(
    null,
    { login }
  )(LoginForm)
);
