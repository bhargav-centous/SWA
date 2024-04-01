import { Helmet } from 'react-helmet-async';

import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import LinkRequest from 'src/sections/Link/Link-request/LinkRequest';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <Helmet>
                <title> Dashboard: Link Request</title>
            </Helmet>
            <LinkRequest />
            <Footerview />
        </Stack>
    );
}
