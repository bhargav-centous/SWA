/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';
// ----------------------------------------------------------------------

import Router from 'src/routes/sections';

import ThemeProvider from 'src/theme';
import { Auth0Provider } from '@auth0/auth0-react';


import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { AuthProvider } from 'src/auth/context/jwt';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';


// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <Auth0Provider
      domain="dev-i8ots30zfws85j3j.us.auth0.com"
      clientId="ttLXBYD1HYfFrbITwX6iQfJlqsXF5SCE"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <AuthProvider>
        <SettingsProvider
          defaultSettings={{
            themeMode: 'light', // 'light' | 'dark'
            themeDirection: 'ltr', //  'rtl' | 'ltr'
            themeContrast: 'default', // 'default' | 'bold'
            themeLayout: 'vertical', // 'vertical' | 'horizontal' | 'mini'
            themeColorPresets: 'default', // 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
            themeStretch: false,
          }}
        >
          <ThemeProvider>
            <MotionLazy>
              <SettingsDrawer />
              <ProgressBar />
              <Router />
            </MotionLazy>
          </ThemeProvider>
        </SettingsProvider>
      </AuthProvider>
    </Auth0Provider>
  );
}
