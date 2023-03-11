import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { BoxInfo, Button } from './UserMenu.styled';
export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <BoxInfo>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        LogOut
      </Button>
    </BoxInfo>
  );
};
