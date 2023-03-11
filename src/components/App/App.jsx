import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('Pages/Home/Home'));
const Register = lazy(() => import('../../Pages/Register/Register'));
const Login = lazy(() => import('../../Pages/Login/Login'));
const Contacts = lazy(() => import('../../Pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (
    <b>Refreshing user data...</b>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
