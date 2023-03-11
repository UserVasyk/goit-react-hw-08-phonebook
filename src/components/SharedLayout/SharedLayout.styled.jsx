import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px 15px;
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const RouteLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: black;
  transition: color 300ms ease;
  &.active,
  &:hover {
    color: orange;
  }
`;
export const Dash = styled.hr`
  margin-bottom: 0;
  border: 1px solid #535353;
`;
export const AutorizationBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;
export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;
