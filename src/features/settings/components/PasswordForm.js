import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";

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
import { updatePassword } from "../actions/settingsActionCreators";

const validationSchema = Yup.object().shape({
  newPassword: Yup.string().required("New password is required"),
  currentPassword: Yup.string().required("Current password is required"),
});
const initialValues = {
  newPassword: "",
  currentPassword: "",
};

const NameForm = (props) => {
  const { togglePasswordForm } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      togglePasswordForm,
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
    };

    dispatch(updatePassword(formik.values, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Description>Update your password</Description>
      <FormItem>
        <Label>New password</Label>
        <Input
          type="password"
          name="newPassword"
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.newPassword && formik.errors.newPassword && (
          <ErrorMessage>{formik.errors.newPassword}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Label>Current password</Label>
        <Input
          type="password"
          name="currentPassword"
          value={formik.values.currentPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.currentPassword && formik.errors.currentPassword && (
          <ErrorMessage>{formik.errors.currentPassword}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{formik.errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={togglePasswordForm}>Cancel</Cancel>
        <Submit disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Loader /> : "Save new password"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

export default NameForm;
