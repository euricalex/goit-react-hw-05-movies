import { Suspense } from 'react';
import {  Outlet } from 'react-router-dom';
import { StyledHeader, StyledLink, StyledNav } from './StyledLayout';

const Layout = () => {
  return (
    <>
      <StyledHeader>
        <StyledNav>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/movies">Movies</StyledLink>
        </StyledNav>
      </StyledHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
