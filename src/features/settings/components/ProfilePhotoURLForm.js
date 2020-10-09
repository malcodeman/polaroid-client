import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Loader from "../../loader/components/Loader";
import { ErrorMessage, LinkIcon } from "../styles/settingsStyles";
import { updateProfilePhotoURL } from "../actions/settingsActionCreators";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledForm = styled.form`
  width: 100%;
  @media (min-width: 992px) {
    width: 50%;
  }
`;

const FormItem = styled.div`
  display: flex;
`;

const Input = styled.input`
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  width: 100%;
  border: 0;
  color: ${(props) => props.theme.primary};
  border-radius: ${(props) => props.theme.borderRadius} 0 0
    ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.backgroundPrimary};
`;

const Submit = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.brand};
  border-radius: 0px ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0px;
`;

const validationSchema = Yup.object().shape({
  profilePhotoURL: Yup.string()
    .required("URL is required")
    .url("Please enter a URL"),
});
const initialValues = {
  profilePhotoURL: "",
};

const ProfilePhotoURLForm = (props) => {
  const { toggleProfilePhotoForm } = props;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  function onSubmit() {
    const meta = {
      toggleProfilePhotoForm,
      setSubmitting: formik.setSubmitting,
      setFieldError: formik.setFieldError,
    };

    dispatch(updateProfilePhotoURL(formik.values, meta));
  }

  return (
    <Wrapper>
      <StyledForm onSubmit={formik.handleSubmit}>
        <FormItem>
          <Input
            type="text"
            name="profilePhotoURL"
            placeholder="Enter a URL"
            values={formik.values.profilePhotoURL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Submit disabled={formik.isSubmitting}>
            {formik.isSubmitting ? <Loader /> : <LinkIcon />}
          </Submit>
        </FormItem>
        <ErrorMessage>
          {(formik.touched.profilePhotoURL && formik.errors.profilePhotoURL && (
            <ErrorMessage>{formik.errors.profilePhotoURL}</ErrorMessage>
          )) ||
            formik.errors.general}
        </ErrorMessage>
      </StyledForm>
    </Wrapper>
  );
};

export default ProfilePhotoURLForm;
