import React from 'react'
import * as Yup from 'yup';
import Proptypes from 'prop-types'
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton';

import { countries } from 'src/assets/data';

import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

export default function NGOForm({ setRegisterStep }) {
    const { enqueueSnackbar } = useSnackbar();

    const UpdateUserSchema = Yup.object().shape({
        org_name: Yup.string().required('Organization Name is required').trim(),
        primary_name: Yup.string().required('Primary Contact Name is required').trim(),
        primary_email: Yup.string().required('Primary Contact Email Address is required').trim(),
        primary_number: Yup.string().required('Primary Contact Phone Number is required').trim(),
        org_registration_number: Yup.string().required('Organization Registration Number is required').trim(),
        parent_organization: Yup.string().required('Parent Organization is required').trim(),
        parent_organization_regestration_num: Yup.string().required('Parent Organization registration Number is required').trim(),

        address: Yup.string().required('Address is required').trim(),
        city: Yup.string().required('City is required').trim(),
        state: Yup.string().required('State is required').trim(),
        country: Yup.string().required('Country is required').trim(),
        zipcode: Yup.string().required('Zip code is required').trim(),
    })

    const defaultValues = {
        org_name: 'Sustainable World Alliance',
        primary_name: 'John Doe',
        primary_email: 'john.doe@gmail.com',
        primary_number: '+61-455-513-290',
        org_registration_number: '78925486458',
        parent_organization: 'Sustainable World Alliance',
        parent_organization_regestration_num: '78925486458',

        address: 'Temp Address',
        state: 'Gujrat',
        city: 'Surat',
        zipcode: '395004',
    }

    const methods = useForm({
        resolver: yupResolver(UpdateUserSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            enqueueSnackbar('Update success!');
            console.log('DATA', data);
            setRegisterStep(1)
        } catch (error) {
            console.error(error);
        }
    });
    return (
        <FormProvider methods={methods} onSubmit={onSubmit}>
            <Box>
                <Divider sx={{ mb: 2 }} />
            </Box>
            <Grid item xs={12} md={8}>
                <Typography sx={{ pb: 2, px: 3, fontWeight: 500, color: '#1D2630', fontSize: 14 }}>Organization Personal Information</Typography>
                <Box
                    rowGap={3}
                    columnGap={2}
                    sx={{ px: 3 }}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                    }}
                >
                    <RHFTextField name="org_name" label="Organization Name" />
                    <RHFTextField name="org_registration_number" label="Organization Registration Number" />
                    <RHFTextField name="primary_name" label="Primary Contact Name" />
                    <RHFTextField name="primary_email" label="Primary Contact Email Address" />
                    <RHFTextField name="primary_number" label="Primary Contact Phone Number" />
                    <RHFTextField name="parent_organization" label="Parent Organization" helperText="Note: Only add these fields if your parent organization has requested" />
                    <RHFTextField name="parent_organization_regestration_num" label="Parent Organization Registration Number" helperText='Note: Only add these fields if your parent organization has requested' />
                </Box>
            </Grid>
            <Box pt={2}>
                <Divider sx={{ mb: 2 }} />
            </Box>
            <Grid item xs={12} md={8}>
                <Typography sx={{ pb: 2, px: 3, fontWeight: 500, color: '#1D2630', fontSize: 14 }}>Organization Address Information</Typography>
                <Box sx={{ mb: 3, px: 3 }}>
                    <RHFTextField name="address" label="Organization Address line 1*" />
                </Box>
                <Box
                    rowGap={3}
                    columnGap={2}
                    sx={{ px: 3, }}
                    display="grid"
                    gridTemplateColumns={{
                        xs: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                    }}
                >
                    <RHFTextField name="city" label="City" />
                    <RHFTextField name="state" label="State/Region" />
                    <RHFTextField name="zipcode" label="Zip/Code" />
                    <RHFAutocomplete
                        name="country"
                        type="country"
                        label="Country"
                        placeholder="Choose a country"
                        options={countries.map((option) => option.label)}
                        getOptionLabel={(option) => option}
                    />
                </Box>
            </Grid>
            <Stack spacing={3} alignItems="flex-end" sx={{ mt: 2, mb: 1, px: 3 }}>
                <LoadingButton sx={{ bgcolor: 'background.green', color: 'common.white' }} type="submit" variant="contained" loading={isSubmitting}>
                    Continue
                </LoadingButton>
            </Stack>
            {/* </Card> */}
            {/* </Container> */}
        </FormProvider>
    )
}

NGOForm.propTypes = {
    setRegisterStep: Proptypes.func
}
