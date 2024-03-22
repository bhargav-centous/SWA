import Box from '@mui/material/Box';
import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { useSettingsContext } from 'src/components/settings';

// ----------------------------------------------------------------------

export default function MembershipDetailsView() {
  const settings = useSettingsContext();

  return (
    <Container sx={{ mt: 6 }} maxWidth={settings.themeStretch ? false : 'xl'}>
      <Typography variant="h4">Membership Details</Typography>
      <Stack direction='row' alignItems='center'>
        <Typography variant='breadcumbHeader'>
          Dashboard
        </Typography>
        <Box mx={1.5} height={4} width={4} sx={{ backgroundColor: '#D9D9D9', borderRadius: '50%' }} />
        <Typography variant='breadcumb'>Membership Details</Typography>
      </Stack>

    </Container>
  );
}
