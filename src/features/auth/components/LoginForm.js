import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

import Loader from "../../loader/components/Loader";
import { login } from "../actions/authActionCreators";
import {
  StyledForm,
  FormItem,
  Input,
  ErrorMessage,
  Button,
} from "../styles/authStyles";
import { useHistory } from "react-router-dom";

const initialValues = {
  username: "",
  password: "",
};
const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username or email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const formik = useFormik({
    validationSchema,
    initialValues,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
      history,
    };

    dispatch(login(formik.values, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <FormItem>
        <Input
          type="text"
          name="username"
          placeholder="Username or email"
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
        {formik.isSubmitting ? <Loader /> : "Log in"}
      </Button>
      <ErrorMessage>{formik.errors.general}</ErrorMessage>
    </StyledForm>
  );
};

export default LoginForm;
