import styled from '@emotion/styled';

export const FormStyled = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h1`
  text-align: center;
  margin: 20px;
`;
export const LabelStyled = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 25px;
  width: 250px;
  gap: 10px;
`;
export const InputStyled = styled.input`
  font-size: 15px;
  padding: 5px 10px;
`;
export const ButtonSubmit = styled.button`
  max-width: 115px;
  border: none;
  background-color: #3894fd;
  height: 35px;
  border-radius: 4px;
  cursor: pointer;
  :hover,
  :focus {
    box-shadow: 3px 3px 14px -1px #1fa9ff;
  }
`;
