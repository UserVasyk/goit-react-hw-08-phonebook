import { Link } from 'react-router-dom';
import { Title, Text } from './Home.styled';
const Home = () => {
  return (
    <>
      <Title>Home</Title>
      <Text>
        Welcome to the PhoneBook site. Here you can save and delete your
        contacts. Just <Link to="register">register</Link> or{' '}
        <Link to="login">log in</Link> if you have an account!
      </Text>
    </>
  );
};
export default Home;
