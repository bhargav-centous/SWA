import React from 'react'
import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment';

import { useBoolean } from 'src/hooks/use-boolean';

import { countries } from 'src/assets/data';

import SvgColor from 'src/components/svg-color';
import FormProvider, { RHFTextField, RHFAutocomplete } from 'src/components/hook-form';

const BillingForm = () => {
    const { enqueueSnackbar } = useSnackbar();
    const { value, onToggle } = useBoolean()
    const defaultValues = {
        fullname: 'Bhargav Tank',
        phonenumber: '+91 9874 563 215',
        email: 'info@example.com',
        cardNumber: '',
        expirationDate: '',
        cvc: ''
    }

    const UpdateUserSchema = Yup.object().shape({
        fullname: Yup.string().required('Full Name is required').trim(),
        phonenumber: Yup.string().required('Phone Number is required').trim(),
        email: Yup.string().required('Email is required').email('Email must be a valid email address'),
        cardNumber: Yup.string().required('Card Number is required').matches(/^\d{16}$/, 'Invalid card number'),
        expirationDate: Yup.string().required('Expiration Date is required').matches(/^\d{2}\/\d{2}$/, 'Invalid expiration date'),
        cvc: Yup.string().required('CVC is required').matches(/^\d{3}$/, 'Invalid CVC')
    })


    const methods = useForm({
        resolver: yupResolver(UpdateUserSchema),
        defaultValues,
    });

    const {
        handleSubmit,
        // formState: { isSubmitting },
    } = methods;

    const onSubmit = handleSubmit(async (data) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 500));
            enqueueSnackbar('Update success!');
            console.log('DATA', data);
        } catch (error) {
            console.error(error);
        }
    });

    return (
        <Card sx={{ px: 4, py: 4 }}>
            <FormProvider methods={methods} onSubmit={onSubmit}>
                <Typography pb={1} variant='h5'>Billing Address</Typography>
                <Grid mt={2} item xs={12} md={12}>
                    <Box
                        rowGap={3}
                        columnGap={2}
                        display="grid"
                        gridTemplateColumns={{
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        }}
                    >
                        <RHFTextField name="fullname" label="Full Name" />
                        <RHFTextField name="phonenumber" label="Phone Number" />
                    </Box>
                    <Box mt={2}>
                        <RHFTextField name="email" label="Email" />
                    </Box>
                    <Box mt={2}>
                        <RHFTextField
                            InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Stack direction='row' spacing={1}>
                                        {['visa', 'mastercard', 'payment', 'express'].map((ele, index) => (
                                            <img
                                                key={index}
                                                src={`/assets/images/register/${ele}.svg`}
                                                alt={ele}
                                            />
                                        ))}
                                        <SvgColor
                                            src="/assets/images/register/visa.svg"
                                            sx={{ width: 16, height: 16, mr: 1 }}
                                        />
                                    </Stack>
                                </InputAdornment>,
                            }}
                            name="cardNumber"
                            label="Cart Information"
                        />
                        <Box
                            // rowGap={3}
                            display="grid"
                            gridTemplateColumns={{
                                xs: 'repeat(1, 1fr)',
                                sm: 'repeat(2, 1fr)',
                            }}
                        >
                            <RHFTextField placeholder='MM / YY' name="expirationDate" />
                            <RHFTextField placeholder="CVC" name="cvc" InputProps={{
                                endAdornment: <InputAdornment position="end">
                                    <Stack direction='row' spacing={1}>
                                        {['cvc'].map((ele, index) => (
                                            <img
                                                key={index}
                                                src={`/assets/images/register/${ele}.svg`}
                                                alt={ele}
                                            />
                                        ))}

                                    </Stack>
                                </InputAdornment>,
                            }} />
                        </Box>
                    </Box>
                    <Box my={2}>
                        <RHFAutocomplete
                            name="country"
                            type="country"
                            label="Country"
                            placeholder="Choose a country"
                            options={countries.map((option) => option.label)}
                            getOptionLabel={(option) => option}
                        />
                        <RHFTextField
                            name="zip"
                            placeholder="Zip"
                        />
                    </Box>
                    <Stack sx={{ mt: 2 }} direction='row' alignItems='center'>
                        <Checkbox
                            checked={value}
                            onDoubleClick={() => console.info('ON DOUBLE CLICK')}
                            onClick={onToggle}
                        />
                        <Typography sx={{ color: '#384049', fontSize: 14 }}>I have read, understood and agreed with your terms and condition.</Typography>
                    </Stack>

                </Grid>
            </FormProvider>
        </Card >
    )
}

export default BillingForm