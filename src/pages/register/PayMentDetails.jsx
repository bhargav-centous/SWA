import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import BillingForm from './BillingForm'
import PaymentMethod from './PaymentMethod'

export default function PayMentDetails({ setRegisterStep }) {
    return (
        <Container>
            <Stack mb={7} direction='row' justifyContent='center'>
                <Stack textAlign='center' direction='column'>
                    <Typography mb={3} fontSize={32} fontWeight={600}>Let&apos;s finish powering you up!</Typography>
                    <Typography color='text.secondary' variant='body1' fontWeight={400}>Standard plan is right for you.</Typography>
                </Stack>
            </Stack>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <BillingForm />
                </Grid>
                <Grid item md={4}>
                    <PaymentMethod onPayment={() => setRegisterStep(3)} />
                </Grid>
            </Grid>
        </Container>
    )
}

PayMentDetails.propTypes = {
    setRegisterStep: PropTypes.func
}

