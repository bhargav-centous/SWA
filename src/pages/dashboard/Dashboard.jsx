import { Helmet } from 'react-helmet-async';

import Stack from '@mui/material/Stack';

import Footerview from 'src/sections/footer/Footerview';
import DashboardView from 'src/sections/Dashboard/DashboardView';


// ----------------------------------------------------------------------

export default function Dashboard() {
  return (
    <Stack justifyContent='space-between' sx={{ height: '100%' }}>
      <Helmet>
        <title> SWA: Dashboard</title>
      </Helmet>

      <DashboardView />
      <Footerview />
    </Stack>
  );
}
