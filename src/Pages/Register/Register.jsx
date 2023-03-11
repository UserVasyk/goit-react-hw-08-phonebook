import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onHandleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    e.currentTarget.reset();
  };

  return (
    <>
      <RegisterForm
        onHandleChange={onHandleChange}
        onHandleSubmit={onHandleSubmit}
      />
    </>
  );
};
export default Register;
