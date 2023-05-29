import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header, HeaderLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <Header>
        <nav>
          <HeaderLink to="/" end>
            Home
          </HeaderLink>
          <HeaderLink to="/movies">Movies</HeaderLink>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
