import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { GuestGuard } from 'src/auth/guard';
import AuthClassicLayout from 'src/layouts/auth/classic';

import { SplashScreen } from 'src/components/loading-screen';

import AuthImage1 from '../../assets/SVG/auth-icon-1.svg'
import AuthImage2 from '../../assets/SVG/auth-icon-2.svg'
import AuthImage3 from '../../assets/SVG/auth-icon-3.svg'

// ----------------------------------------------------------------------

// JWT
// const JwtLoginPage = lazy(() => import('src/pages/auth/jwt/login'));
// const JwtRegisterPage = lazy(() => import('src/pages/auth/jwt/register'));

// AUTH0
const Auth0LoginPage = lazy(() => import('src/pages/auth/auth0/login'));
const Auth0Callback = lazy(() => import('src/pages/auth/auth0/callback'));
// ----------------------------------------------------------------------
// Array of available Auth images
const authImages = [AuthImage1, AuthImage2, AuthImage3];

// Function to generate random integer within a range
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Get a random index within the range of authImages array
const randomIndex = getRandomInt(0, authImages.length - 1);

// Selected random image
const randomImage = authImages[randomIndex];


const authAuth0 = {
  path: 'auth0',
  element: (
    <Suspense fallback={<SplashScreen />}>
      <Outlet />
    </Suspense>
  ),
  children: [
    {
      path: 'login',
      element: (
        <GuestGuard>
          <AuthClassicLayout image={randomImage}>
            <Auth0LoginPage />
          </AuthClassicLayout>
        </GuestGuard>
      ),
    },
    {
      path: 'callback',
      element: (
        <GuestGuard>
          <Auth0Callback />
        </GuestGuard>
      ),
    },
  ],
};

export const authRoutes = [
  {
    path: 'auth',
    children: [authAuth0],
  },
];
