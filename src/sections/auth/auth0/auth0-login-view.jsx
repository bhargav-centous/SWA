import { useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useSearchParams } from 'src/routes/hooks';

import { useAuthContext } from 'src/auth/hooks';
import { PATH_AFTER_LOGIN } from 'src/config-global';

// ----------------------------------------------------------------------

export default function Auth0LoginView() {
  const { loginWithRedirect } = useAuthContext();

  const searchParams = useSearchParams();

  const returnTo = searchParams.get('returnTo');

  // const handleLoginWithPopup = useCallback(async () => {
  //   try {
  //     await loginWithPopup?.();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [loginWithPopup]);

  // const handleRegisterWithPopup = useCallback(async () => {
  //   try {
  //     await loginWithPopup?.({
  //       authorizationParams: {
  //         screen_hint: 'signup',
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [loginWithPopup]);

  const handleLoginWithRedirect = useCallback(async () => {
    try {
      await loginWithRedirect?.({
        appState: {
          returnTo: returnTo || PATH_AFTER_LOGIN,
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, [loginWithRedirect, returnTo]);

  // const handleRegisterWithRedirect = useCallback(async () => {
  //   try {
  //     await loginWithRedirect?.({
  //       appState: {
  //         returnTo: returnTo || PATH_AFTER_LOGIN,
  //       },
  //       authorizationParams: {
  //         screen_hint: 'signup',
  //       },
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, [loginWithRedirect, returnTo]);

  return (
    <Stack className='bhargav' direction='column' height='100%' justifyContent='center'>
      <Typography fontSize={24} fontWeight={700} textAlign='center' variant="footertext" sx={{ mb: 5 }}>
        Welcome to SWA
      </Typography>
      <Typography color='#464646' variant="body2" textAlign='center' sx={{ mb: 5 }}>
        Login with your SWA account to continue
      </Typography>

      <Stack direction='row' justifyContent='center' spacing={2}>
        <Button
          sx={{ width: '153px' }}
          color="primary"
          size="large"
          variant="contained"
          onClick={handleLoginWithRedirect}
        >
          Log in
        </Button>
        <Button
          sx={{ bgcolor: 'background.darkGray', width: '153px' }}
          size="large"
          variant="contained"
          onClick={handleLoginWithRedirect}
        >
          Sign Up
        </Button>

        {/* <Button
          fullWidth
          color="primary"
          size="large"
          variant="soft"
          onClick={handleRegisterWithRedirect}
        >
          Register with Redirect
        </Button>

        <Divider />

        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="contained"
          onClick={handleLoginWithPopup}
        >
          Login With Popup
        </Button>

        <Button
          fullWidth
          color="inherit"
          size="large"
          variant="soft"
          onClick={handleRegisterWithPopup}
        >
          Register With Popup
        </Button> */}
      </Stack>
    </Stack>
  );
}
