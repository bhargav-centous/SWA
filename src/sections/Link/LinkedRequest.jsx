import React from 'react'

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import PendingRequestView from './LinkRequestView';




const LinkedRequest = () => {
    const settings = useSettingsContext();
    return (
        <Container maxWidth={settings.themeStretch ? false : 'lg'}>
            <CustomBreadcrumbs
                heading="Linked Request"
                links={[
                    { name: 'Dashboard', href: paths.dashboard.root },
                    { name: 'Linked Request', href: paths.dashboard.linkedRequest },
                ]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />
            <PendingRequestView />


        </Container>
    )
}

export default LinkedRequest