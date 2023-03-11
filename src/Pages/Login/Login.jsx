import { LoginForm } from 'components/LoginForm/LoginForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onHandleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };
  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    e.currentTarget.reset();
  };
  return (
    <LoginForm
      onHandleChange={onHandleChange}
      onHandleSubmit={onHandleSubmit}
    />
  );
};
export default Login;
