import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';

import { useAuthContext } from 'src/auth/hooks';

import Layout from './Layout';
import NGOForm from './NGOForm';
import ChoosePlan from './ChoosePlan';
import IndividualForm from './IndividualForm';
import PayMentDetails from './PayMentDetails';

export default function CheckRegisterStepsLayout({ children }) {
    const [selectedOrganizationType, setSelectedOrganizationType] = useState(null);
    const [registerStep, setRegisterStep] = useState(0)
    const { authenticated, user } = useAuthContext();
    console.log(user);
    const tempOrganizationTypes = [
        'Individual',
        'Ngo'
    ];

    const handleOrganizationTypeChange = (event, value) => {
        setSelectedOrganizationType(value);
    };
    console.log(registerStep);
    if (registerStep === 3) {
        return <>{children}</>;
    }

    if (authenticated) {
        return (
            <Box height="100%">
                <Layout>
                    {registerStep === 0 &&
                        <Container>
                            <Card sx={{
                                mx: 'auto',
                                pb: selectedOrganizationType ? 2 : 11,
                                maxWidth: {
                                    md: 806
                                }
                            }}>
                                <Typography sx={{ pl: 3, pt: 2, fontWeight: 500, color: '#1D2630', fontSize: 14 }}>Are You Individual Or Organization?</Typography>
                                <Divider sx={{ pb: 2 }} />
                                <Grid item xs={12} md={12} sx={{ p: 3, pb: 0 }}>
                                    <Box
                                        pb={2}
                                        rowGap={3}
                                        columnGap={2}
                                        display="grid"
                                        gridTemplateColumns={{
                                            xs: 'repeat(1, 1fr)',
                                            sm: 'repeat(2, 1fr)',
                                        }}
                                    >
                                        <Stack>
                                            <Autocomplete
                                                // disablePortal
                                                id="combo-box-demo"
                                                options={tempOrganizationTypes}
                                                sx={{ width: 300 }}
                                                value={selectedOrganizationType}
                                                onChange={handleOrganizationTypeChange}
                                                renderInput={(params) => <TextField {...params} label="Organization Type" />}
                                            />
                                        </Stack>
                                    </Box>
                                </Grid>
                                {selectedOrganizationType === 'Individual' && <IndividualForm setRegisterStep={setRegisterStep} />}
                                {selectedOrganizationType === 'Ngo' && <NGOForm setRegisterStep={setRegisterStep} />}
                            </Card>
                        </Container>}

                    {registerStep === 1 &&
                        <ChoosePlan setRegisterStep={setRegisterStep} />}
                    {registerStep === 2 &&
                        <PayMentDetails setRegisterStep={setRegisterStep} />}

                </Layout>
            </Box>
        );
    }
    return <>{children}</>;

}

CheckRegisterStepsLayout.propTypes = {
    children: PropTypes.node,
};
