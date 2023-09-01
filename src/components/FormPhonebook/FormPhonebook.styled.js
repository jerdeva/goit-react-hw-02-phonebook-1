import styled from 'styled-components';
import { Form, ErrorMessage } from 'formik';

export const FormPhB = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 8px;
  border: 1px solid black;
  width: 320px;
`;

export const LabelStyle = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  color: red;
`;
