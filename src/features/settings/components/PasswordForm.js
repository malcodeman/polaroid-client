import React from "react";
import * as Yup from "yup";
import { withFormik } from "formik";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
  Submit
} from "../styles/settingsStyles";
import { updatePassword } from "../actions/settingsActionCreators";

const FormikForm = props => {
  const { errors, touched, isSubmitting, togglePasswordForm } = props;

  return (
    <StyledForm>
      <Description>Update your password</Description>
      <FormItem>
        <Label>New password</Label>
        <Input type="password" name="newPassword" />
        {touched.newPassword && errors.newPassword && (
          <ErrorMessage>{errors.newPassword}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Label>Current password</Label>
        <Input type="password" name="currentPassword" />
        {touched.currentPassword && errors.currentPassword && (
          <ErrorMessage>{errors.currentPassword}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={togglePasswordForm}>Cancel</Cancel>
        <Submit disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Save new password"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

const NameForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    newPassword: Yup.string().required("New password is required"),
    currentPassword: Yup.string().required("Current password is required")
  }),
  mapPropsToValues: props => ({
    newPassword: props.newPassword || "",
    currentPassword: props.currentPassword || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updatePassword(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      togglePasswordForm: bag.props.togglePasswordForm
    });
  }
})(FormikForm);

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { updatePassword }
  )(NameForm)
);
