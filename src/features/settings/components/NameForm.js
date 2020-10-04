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
import { updateName } from "../actions/settingsActionCreators";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
});

const NameForm = (props) => {
  const { toggleNameForm } = props;
  const dispatch = useDispatch();
  const me = useSelector((state) => state.users.me);
  const initialValues = {
    name: me.name || "",
  };
  const formik = useFormik({
    validationSchema,
    initialValues,
    enableReinitialize: true,
    onSubmit,
  });

  function onSubmit() {
    const payload = formik.values;
    const meta = {
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
      toggleNameForm,
    };

    dispatch(updateName(payload, meta));
  }

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Description>What’s your name?</Description>
      <FormItem>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <ErrorMessage>{formik.errors.name}</ErrorMessage>
        )}
      </FormItem>
      <ErrorMessage>{formik.errors.general}</ErrorMessage>
      <Footer>
        <Cancel onClick={toggleNameForm}>Cancel</Cancel>
        <Submit disabled={formik.isSubmitting}>
          {formik.isSubmitting ? <Loader /> : "Save name"}
        </Submit>
      </Footer>
    </StyledForm>
  );
};

export default NameForm;
