import styled from '@emotion/styled';
import { Form } from 'formik';

export const FormBox = styled(Form)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 600px;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
`;

export const FormLabel = styled.label`
  width: 60px;
  margin-right: 10px;
`;

export const FormInput = styled.input`
  width: 200px;
  height: 20px;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const FormButton = styled.button`
  display: block;
  margin-top: 20px;
  width: 160px;
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: #b6d5d8;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 4px 4px rgba(0, 0, 0, 0.03),
    1px 4px 6px rgba(0, 0, 0, 0.08);
  transition: scale 250ms linear, background-color 250ms linear,
    color 250ms linear;

  :hover,
  :focus {
    background-color: #63868a;
    color: #e1e4e9;
    scale: 1.1;
  }
`;
