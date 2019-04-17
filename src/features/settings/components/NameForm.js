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
import { updateName } from "../actions/settingsActionCreators";

const FormikForm = props => {
  const { errors, touched, isSubmitting, toggleNameForm } = props;

  return (
    <StyledForm>
      <Description>What’s your name?</Description>
      <FormItem>
        <Label>Name</Label>
        <Input type="text" name="name" />
        {touched.name && errors.name && (
          <ErrorMessage>{errors.name}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={toggleNameForm}>Cancel</Cancel>
        <Submit disabled={isSubmitting}>
          {isSubmitting ? <Loader /> : "Save name"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

const NameForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required")
  }),
  mapPropsToValues: props => ({
    name: props.me.name || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.updateName(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      toggleNameForm: bag.props.toggleNameForm
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
    { updateName }
  )(NameForm)
);
