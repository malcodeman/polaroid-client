import React, { Component } from "react";
import { withFormik, Form, Field } from "formik";
import Yup from "yup";
import styled from "styled-components";

const FormWrapper = styled.div`
  max-width: 576px;
  padding: 40px 20px;
  width: 100%;
`;

const StyledForm = styled(Form)`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
`;

const Header = styled.header`
  padding: 20px;
`;

const InputWrapper = styled.div`
  border-top: 2px dashed rgba(0, 0, 0, 0.4);
  border-bottom: 2px dashed rgba(0, 0, 0, 0.4);
  height: 120px;
`;

const Input = styled(Field)`
  color: #262626;
  height: 36px;
  font-size: 0.8rem;
  padding: 0 10px;
  outline: 0;
  border: 0;
  height: 100%;
  width: 100%;
`;

const ProfilePhotoPreview = styled.img`
  object-fit: cover;
  height: 256px;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  border-radius: 2px;
  font-size: 0.8rem;
  padding: 10px;
  background-color: ${props => (props.primary ? "#007aff" : "rgba(0,0,0,.4)")};
  &:disabled {
    background-color: rgba(0, 122, 255, 0.4);
  }
`;

class FormikForm extends Component {
  render() {
    const { errors, touched } = this.props;
    const { profilePhotoURL } = this.props.values;
    return (
      <FormWrapper>
        <StyledForm>
          <Header />
          {profilePhotoURL ? (
            <ProfilePhotoPreview src={this.props.values.profilePhotoURL} />
          ) : (
            <InputWrapper>
              <Input
                type="text"
                name="profilePhotoURL"
                placeholder="Paste a URL"
              />
            </InputWrapper>
          )}
          <Footer>
            <Button>Close</Button>
            <Button primary disabled={!profilePhotoURL}>
              Upload
            </Button>
          </Footer>
        </StyledForm>
      </FormWrapper>
    );
  }
}

const ProfilePhotoForm = withFormik({
  mapPropsToValues: props => ({
    profilePhotoURL: props.profilePhotoURL || ""
  }),
  validationSchema: Yup.object().shape({
    profilePhotoURL: Yup.string().required("Photo URL can't be empty")
  }),
  handleSubmit(payload, bag) {
    bag.setSubmitting(false);
    bag.props.updateProfilePhoto(payload);
    bag.resetForm();
  }
})(FormikForm);

export default ProfilePhotoForm;
