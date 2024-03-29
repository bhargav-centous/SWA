import React from 'react'

import Container from '@mui/material/Container';

import { paths } from 'src/routes/paths';

import { useBoolean } from 'src/hooks/use-boolean';

import { useSettingsContext } from 'src/components/settings';
import CustomBreadcrumbs from 'src/components/custom-breadcrumbs';

import ListOfGoal from './ListOfGoal';
import DisclaimerCard from './DisclaimerCard';

const SelfAssessmentForm = () => {
    const settings = useSettingsContext();
    const listofgoal = useBoolean();


    const onContinue = () => {
        listofgoal.onTrue()
    }

    return (
        <Container maxWidth={settings.themeStretch ? false : 'lg'}>
            <CustomBreadcrumbs
                heading="Self Assessment Form"
                links={[
                    { name: 'Dashboard', href: paths.dashboard.root },
                    { name: 'Self Assessment Form', href: paths.dashboard.selfAssessmentForm },
                ]}
                sx={{
                    mb: { xs: 3, md: 5 },
                }}
            />

            {listofgoal.value ? <ListOfGoal /> : <DisclaimerCard onContinue={onContinue} />}

        </Container>
    )
}

export default SelfAssessmentForm