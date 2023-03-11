import PropTypes from 'prop-types';
import {
  FormStyled,
  InputStyled,
  Title,
  LabelStyled,
  ButtonSubmit,
} from './RegisterForm.styled';
export const RegisterForm = ({ onHandleChange, onHandleSubmit }) => {
  return (
    <>
      <Title>Register</Title>
      <FormStyled onSubmit={onHandleSubmit}>
        <LabelStyled>
          Name
          <InputStyled
            onChange={onHandleChange}
            name="name"
            type="text"
            minLength="3"
            maxLength="16"
            required
          />
        </LabelStyled>
        <LabelStyled>
          Email
          <InputStyled
            onChange={onHandleChange}
            name="email"
            type="email"
            required
          />
        </LabelStyled>
        <LabelStyled>
          Password
          <InputStyled
            onChange={onHandleChange}
            name="password"
            type="password"
            minLength="7"
            maxLength="16"
            autoComplete="on"
            required
          />
        </LabelStyled>
        <ButtonSubmit type="submit">Register</ButtonSubmit>
      </FormStyled>
    </>
  );
};
RegisterForm.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};
