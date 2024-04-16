/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable perfectionist/sort-imports */
import 'src/global.css';

// ----------------------------------------------------------------------

import Router from 'src/routes/sections';

import ThemeProvider from 'src/theme';


import { useScrollToTop } from 'src/hooks/use-scroll-to-top';
import { AuthProvider } from 'src/auth/context/auth0';

import ProgressBar from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { SettingsDrawer, SettingsProvider } from 'src/components/settings';
import CheckRegisterStepsLayout from './pages/register';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
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
          <CheckRegisterStepsLayout>
            <MotionLazy>
              {/* <SnackbarProvider> */}
              {/* <CheckoutProvider> */}
              <SettingsDrawer />
              <ProgressBar />
              <Router />
              {/* </CheckoutProvider> */}
              {/* </SnackbarProvider> */}
            </MotionLazy>
          </CheckRegisterStepsLayout>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>

  );
}
