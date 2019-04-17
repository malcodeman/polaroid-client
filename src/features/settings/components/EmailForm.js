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
import { updateEmail } from "../actions/settingsActionCreators";

const FormikForm = props => {
  const { errors, touched, isSubmitting, toggleEmailForm } = props;

  return (
    <StyledForm>
      <Description>Update your email address</Description>
      <FormItem>
        <Label>Email</Label>
        <Input type="email" name="email" />
        {touched.email && errors.email && (
          <ErrorMessage>{errors.email}</ErrorMessage>
        )}
      </FormItem>
      <FormItem>
        <Label>Password</Label>
        <Input type="password" name="password" />
        {touched.password && errors.password && (
          <ErrorMessage>{errors.password}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={toggleEmailForm}>Cancel</Cancel>
        <Submit disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Save email"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

const NameForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required")
  }),
  mapPropsToValues: props => ({
    email: props.me.email || "",
    password: props.password || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updateEmail(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      toggleEmailForm: bag.props.toggleEmailForm
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
    { updateEmail }
  )(NameForm)
);
