import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import {
  Header,
  Dash,
  Navigation,
  RouteLink,
  AutorizationBox,
  Container,
} from './SharedLayout.styled';
export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Header>
        <Navigation>
          <RouteLink to="/" end>
            Home
          </RouteLink>
          {isLoggedIn && <RouteLink to="/contacts">Contacts</RouteLink>}
          {!isLoggedIn ? (
            <AutorizationBox>
              <RouteLink to="register">Register</RouteLink>
              <RouteLink to="login">Log In</RouteLink>
            </AutorizationBox>
          ) : (
            <UserMenu />
          )}
        </Navigation>
        <Dash />
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
