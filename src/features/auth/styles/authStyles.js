import styled from "styled-components";
import { Form, Field } from "formik";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
`;

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

export const Input = styled(Field)`
  height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primary};
`;

export const Button = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  height: 36px;
  font-size: 0.8rem;
  padding: 0;
  margin-bottom: 24px;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ErrorMessage = styled.span`
  margin: 4px 0;
  font-size: 0.8rem;
  color: ${props => props.theme.error};
`;
