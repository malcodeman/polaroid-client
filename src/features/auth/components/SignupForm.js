import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  padding: 24px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 256px;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  margin-bottom: 10px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #999;
  font-size: 0.8rem;
`;

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
`;

const Button = styled.button`
  background: #007aff;
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
          <Label>Email</Label>
          <Input type="email" name="email" />
          {touched.email &&
            errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormItem>
        <FormItem>
          <Label>Password</Label>
          <Input type="text" name="password" />
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
    password: props.password || ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.resetForm();
  }
})(FormikForm);

export default SignupForm;
