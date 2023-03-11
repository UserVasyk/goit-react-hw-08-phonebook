import PropTypes from 'prop-types';
import {
  FormStyled,
  InputStyled,
  Title,
  LabelStyled,
  ButtonSubmit,
} from './LoginForm.styled';
export const LoginForm = ({ onHandleSubmit, onHandleChange }) => {
  return (
    <>
      <Title>Login</Title>
      <FormStyled onSubmit={onHandleSubmit}>
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
        <ButtonSubmit type="submit">Login</ButtonSubmit>
      </FormStyled>
    </>
  );
};
LoginForm.propTypes = {
  onHandleChange: PropTypes.func.isRequired,
  onHandleSubmit: PropTypes.func.isRequired,
};
