import { useAuth0 } from "@auth0/auth0-react";

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LoadingButton from '@mui/lab/LoadingButton';

// ----------------------------------------------------------------------

export default function JwtLoginView() {
  const { loginWithRedirect } = useAuth0();

  const renderHead = (
    <Stack alignItems="center" spacing={2} sx={{ mb: 5, mt: 24 }}>
      <Typography variant="h4">Welcome to SWA</Typography>

      <Stack direction="row" spacing={0.5}>
        <Typography variant="body2">Login with your SWA account to continue</Typography>
      </Stack>
    </Stack>
  );

  const renderForm = (
    <Stack direction='row' spacing={2.5}>
      <LoadingButton
        fullWidth
        onClick={loginWithRedirect}
        sx={{ bgcolor: "background.green", width: 'maxContent' }}
        size=""
        type="submit"
        variant="contained"
      >
        Log in
      </LoadingButton>
      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
      >
        Sign up
      </LoadingButton>
    </Stack>
  );

  return (
    <Stack direction='column'>
      {renderHead}
      {renderForm}
    </Stack>
  );
}
