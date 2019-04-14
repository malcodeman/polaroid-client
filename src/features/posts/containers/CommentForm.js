import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

const Section = styled.section`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0;
  outline: 0;
  border: 0;
  width: 100%;
`;

class FormikForm extends Component {
  render() {
    return (
      <Section>
        <Form>
          <Input type="text" name="body" placeholder="Add a comment..." />
        </Form>
      </Section>
    );
  }
}

const CommentForm = withFormik({
  mapPropsToValues: props => ({
    postId: props.postId,
    body: props.body || ""
  }),
  validationSchema: Yup.object().shape({
    body: Yup.string().required("Comment can't be empty")
  }),
  mapValuesToPayload: values => ({
    postId: values.postId,
    body: values.body || ""
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.createComment(payload);
    bag.resetForm();
  }
})(FormikForm);

export default CommentForm;
