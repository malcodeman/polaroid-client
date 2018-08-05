import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import Yup from "yup";
import styled from "styled-components";

import { signup } from "../actions/auth_actions";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Input = styled(Field)`
  color: #3a3133;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
`;

const Button = styled.button`
  background: #3a3133;
  color: #fff;
  border: 0;
  cursor: pointer;
  height: 36px;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0;
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

class FormikForm extends Component {
  render() {
    const { errors, touched, isSubmitting } = this.props;
    return (
      <StyledForm>
        <FormItem>
          <Input type="email" name="email" placeholder="Email" />
          {touched.email &&
            errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormItem>
        <FormItem>
          <Input type="text" name="name" placeholder="Full name" />
          {touched.name &&
            errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormItem>
        <FormItem>
          <Input type="text" name="username" placeholder="Username" />
          {touched.username &&
            errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </FormItem>
        <FormItem>
          <Input type="password" name="password" placeholder="Password" />
          {touched.password &&
            errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormItem>
        <Button disabled={isSubmitting}>Sign up</Button>
      </StyledForm>
    );
  }
}

const SignupForm = withFormik({
  mapPropsToValues: props => ({
    email: props.email || "",
    name: props.name || "",
    username: props.username || "",
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    name: Yup.string().required("Name is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.signup(payload);
    bag.resetForm();
  }
})(FormikForm);

export default connect(
  null,
  { signup }
)(SignupForm);
