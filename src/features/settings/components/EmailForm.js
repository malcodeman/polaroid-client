import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../loader/components/Loader";
import {
  StyledForm,
  Description,
  FormItem,
  Label,
  Input,
  ErrorMessage,
  Footer,
  Cancel,
  Submit,
} from "../styles/settingsStyles";
import { updateEmail } from "../actions/settingsActionCreators";

const validationSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const NameForm = (props) => {
  const { toggleEmailForm } = props;
  const dispatch = useDispatch();
  const me = useSelector((state) => state.users.me);
  const initialValues = {
    email: me.email || "",
    password: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    enableReinitialize: true,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      toggleEmailForm,
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
    };

    dispatch(updateEmail(formik.values, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Description>Update your email address</Description>
      <FormItem>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Label>Password</Label>
        <Input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <ErrorMessage>{formik.errors.password}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{formik.errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={toggleEmailForm}>Cancel</Cancel>
        <Submit disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Loader /> : "Save email"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

export default NameForm;
