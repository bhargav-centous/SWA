import { Helmet } from 'react-helmet-async';

import { Stack } from '@mui/material';

import Footerview from 'src/sections/footer/Footerview';
import SelfAssessmentForm from 'src/sections/Self-Assessment-Form/SelfAssessmentForm';


// ----------------------------------------------------------------------

export default function Page() {
    return (
        <Stack justifyContent='space-between' sx={{ height: '100%' }}>
            <Helmet>
                <title> SWA: Self Assessment Form</title>
            </Helmet>

            <SelfAssessmentForm />
            <Footerview />
        </Stack>
    );
}
