import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
`;
export const Input = styled.input`
  margin-top: 5px;
  font-size: 22px;
  border: none;
  padding: 5px;
  border-radius: 6px;
  background: #e0e0e0;
  box-shadow: inset 5px 5px 13px #5a5a5a, inset -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
export const ClearButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: none;
  font-size: 15px;
  font-size: 25px;
  padding: 5px;
  margin-left: 20px;
  border-radius: 6px;
  background: linear-gradient(145deg, #cacaca, #f0f0f0);
  box-shadow: 5px 5px 13px #5a5a5a, -5px -5px 13px #ffffff;
  &:focus,
  &:hover {
    outline: 1px solid aqua;
  }
`;
