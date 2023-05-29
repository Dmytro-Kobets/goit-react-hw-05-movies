import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.64);
  padding: 15px 30px;
`;

export const HeaderLink = styled(NavLink)`
  font-size: 22px;
  margin-right: 15px;
  text-decoration: none;
  color: black;
  &.active {
    color: orange;
  }
`;
