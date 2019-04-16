import React from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const StyledForm = styled(Form)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  min-height: 56px;
  border-top: 1px solid ${props => props.theme.borderColor};
`;

const Input = styled(Field)`
  height: 36px;
  font-size: 0.8rem;
  padding: 0;
  outline: 0;
  border: 0;
  width: 100%;
  color: ${props => props.theme.primary};
`;

const Submit = styled.button`
  font-size: 0.8rem;
  border: 0;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.brand};
  &:disabled {
    opacity: 0.4;
  }
`;

const FormikForm = props => {
  const { values } = props;

  return (
    <StyledForm>
      <Input type="text" name="body" placeholder="Add a comment..." />
      <Submit disabled={values.body === ""}>Post</Submit>
    </StyledForm>
  );
};

const CommentForm = withFormik({
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Comment can't be empty")
  }),
  mapPropsToValues: props => ({
    postId: props.postId,
    body: props.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createComment(payload);
    bag.resetForm();
  }
})(FormikForm);

export default CommentForm;
