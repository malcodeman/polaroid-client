import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import { connect } from "react-redux";
import Yup from "yup";
import styled from "styled-components";

import Loader from "../../../loader/components/Loader";

import editIcon from "./icons/edit.svg";

import { updateEmail } from "../../actions/settingsActions";

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

const Input = styled(Field)`
  color: #3a3133;
  height: 36px;
  font-size: 0.8rem;
  padding: 6px 9px;
  outline: 0;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 2px;
`;

const Button = styled.button`
  background-color: ${props =>
    props.secondary ? "rgba(0, 0, 0, 0.2)" : props.theme.brand}
  color: ${props => (props.secondary ? "#3a3133" : "#fff")}
  ${props => (props.marginRight ? "margin-right: 6px" : "")}
  border: 0;
  cursor: pointer;
  min-height: 36px;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 0 10px;
  &:disabled {
    opacity: 0.8;
  }
`;

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #b00e23;
`;

const Label = styled.label`
  font-size: 0.8rem;
  line-height: 1;
`;

const ButtonsWrapper = styled.div`
  display: flex;
`;

const Text = styled.p`
  font-size: 0.8rem;
  line-height: 1.2;
`;

const Wrapper = styled.div`
  padding: 24px 0;
`;

const FormContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EditButton = styled.img`
  height: 16px;
  width: 16px;
  cursor: pointer;
`;

class FormikForm extends Component {
  state = {
    showForm: false
  };
  handleToggleShowForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }));
  };
  render() {
    const { errors, touched, isSubmitting } = this.props;
    const { email } = this.props.me;
    const { showForm } = this.state;
    if (showForm) {
      return (
        <StyledForm>
          <Label>Email</Label>
          <Input type="text" name="email" placeholder="Email" />
          {touched.email &&
            errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          <ButtonsWrapper>
            <Button
              secondary
              marginRight
              onClick={this.handleToggleShowForm}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button disabled={isSubmitting}>
              {isSubmitting ? <Loader message={"Saving"} /> : "Save"}
            </Button>
          </ButtonsWrapper>
        </StyledForm>
      );
    }
    return (
      <Wrapper>
        <Label>Email</Label>
        <FormContent>
          <Text>{email}</Text>
          <EditButton src={editIcon} onClick={this.handleToggleShowForm} />
        </FormContent>
      </Wrapper>
    );
  }
}

const EmailForm = withFormik({
  enableReinitialize: true,
  mapPropsToValues: props => ({
    email: props.me.email || ""
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is empty.")
      .email("Email appears to be invalid.")
  }),
  handleSubmit(payload, bag) {
    bag.props.updateEmail(payload, { setSubmitting: bag.setSubmitting });
  }
})(FormikForm);

const mapStateToProps = state => {
  return {
    me: state.users.me
  };
};

export default connect(
  mapStateToProps,
  { updateEmail }
)(EmailForm);
