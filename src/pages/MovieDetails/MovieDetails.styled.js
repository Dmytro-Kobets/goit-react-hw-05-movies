import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackLink = styled(Link)`
  color: black;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  padding-left: 25px;
`;

export const Container = styled.div`
  padding: 15px 0;
`;

export const MainContentContainer = styled.div`
  display: flex;
  gap: 40px;
  width: 100%;
  border-bottom: 1px solid grey;
  padding: 20px;
`;

export const LinkContainer = styled.div`
  padding-left: 20px;
  font-size: 18px;
  border-bottom: 1px solid grey;
`;

export const AdditionalLink = styled(Link)`
  color: black;
`;
