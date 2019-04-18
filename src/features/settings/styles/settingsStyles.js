import styled from "styled-components";
import { Form, Field } from "formik";

import { ReactComponent as editIcon } from "../assets/icons/edit.svg";
import { ReactComponent as linkIcon } from "../assets/icons/link.svg";
import { ReactComponent as attachmentIcon } from "../assets/icons/attachment.svg";
import { ReactComponent as xIcon } from "../assets/icons/x.svg";

export const EditIcon = styled(editIcon)`
  cursor: pointer;
  margin-right: 4px;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const LinkIcon = styled(linkIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const AttachmentIcon = styled(attachmentIcon)`
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const XIcon = styled(xIcon)`
  margin-left: auto;
  cursor: pointer;
  fill: ${props => props.fill};
  stroke: ${props => props.stroke};
  width: ${props => props.width || "20px"};
  height: ${props => props.height || "20px"};
`;

export const StyledForm = styled(Form)`
  margin: 24px 0;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Description = styled.p`
  font-size: 0.8rem;
  margin-bottom: 8px;
  color: ${props => props.theme.primary};
`;

export const FormItem = styled.div`
  margin-bottom: 24px;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 4px;
  color: ${props => props.theme.secondary};
`;

export const Input = styled(Field)`
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 4px;
  outline: 0;
  width: 100%;
  background-color: ${props => props.theme.backgroundSecondary};
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
  color: ${props => props.theme.primary};
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
`;

export const Cancel = styled.button`
  border: 0;
  cursor: pointer;
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 16px;
  background-color: transparent;
  color: ${props => props.theme.secondary};
`;

export const Submit = styled.button`
  color: #fff;
  border: 0;
  cursor: pointer;
  min-height: 36px;
  font-size: 0.8rem;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.brand};
  border-radius: ${props => props.theme.borderRadius};
`;

export const ErrorMessage = styled.span`
  margin: 4px 0;
  font-size: 0.8rem;
  color: ${props => props.theme.error};
`;
