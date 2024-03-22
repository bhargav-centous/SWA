import { Helmet } from 'react-helmet-async';

import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import AccountView from 'src/sections/MembershipDetails/user-profile-view';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <Helmet>
        <title> Dashboard: MembershipDetails</title>
      </Helmet>

      <AccountView />
      <Footerview />
    </Stack>
  );
}
