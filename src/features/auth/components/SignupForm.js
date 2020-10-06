import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Loader from "../../loader/components/Loader";
import { signup } from "../actions/authActionCreators";
import {
  StyledForm,
  FormItem,
  Input,
  ErrorMessage,
  Button,
} from "../styles/authStyles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  name: Yup.string().required("Name is required"),
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .required("Password is required")
    .min(
      6,
      "Your password must be at least 6 characters long. Please try another."
    ),
});
const initialValues = {
  email: "",
  name: "",
  username: "",
  password: "",
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
      history,
    };

    dispatch(signup(formik.values, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormItem>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          values={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Input
          type="text"
          name="name"
          placeholder="Full name"
          values={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Input
          type="text"
          name="username"
          placeholder="Username"
          values={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.username && formik.errors.username && (
          <ErrorMessage>{formik.errors.username}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          values={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
      </FormItem>
      <Button disabled={formik.isSubmitting}>
        {formik.isSubmitting ? <Loader /> : "Sign up"}
      </Button>
      <ErrorMessage>{formik.errors.general}</ErrorMessage>
    </StyledForm>
  );
};

export default SignupForm;
