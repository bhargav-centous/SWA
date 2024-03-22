import { Helmet } from 'react-helmet-async';

import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import MembershipDetailsView from 'src/sections/two/MembershipDetailsView';


// ----------------------------------------------------------------------

export default function Page() {
  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <Helmet>
        <title> Dashboard: MembershipDetails</title>
      </Helmet>

      <MembershipDetailsView />
      <Footerview />
    </Stack>
  );
}
