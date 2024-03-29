import { Helmet } from 'react-helmet-async';

import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import PendnigRequest from 'src/sections/Link/LinkedRequest';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <Helmet>
                <title> Dashboard: Linked Request</title>
            </Helmet>
            <PendnigRequest />
            <Footerview />
        </Stack>
    );
}
