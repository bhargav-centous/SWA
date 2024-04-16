import React from 'react'
import PropTypes from 'prop-types'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography'

import SvgColor from 'src/components/svg-color'

const DashBorder = styled('div')`
  border: 1px dashed #e8e8e8;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: 16px;
`;

export default function PaymentMethod({ onPayment }) {
    return (
        <Card sx={{ bgcolor: 'background.neutral', px: 4, py: 4 }}>
            <Typography fontWeight={600} pb={6} variant='h5'>Payment Method</Typography>
            <Stack direction='row' justifyContent='space-between' alignItems='center'>
                <Typography>Subscription</Typography>
                <Typography bgcolor="#FF563029" px={1} fontSize={14} borderRadius={1 / 2} py={1 / 2} color='error.dark'>Standard</Typography>
            </Stack>
            <Stack mt={9} mb={3} direction="row" justifyContent='end' >
                <Stack direction='row' alignItems="center">
                    <SvgColor sx={{ height: '14px', width: '15px', bgcolor: 'background.green' }} src="/assets/icons/membership/dollar-sign.svg" />
                    <Typography sx={{ color: 'background.green', typography: 'h3' }}>99</Typography>
                    <Box component="span" sx={{ typography: 'body2', color: 'text.disabled', ml: 0.5 }}>
                        /mo
                    </Box>
                </Stack>
            </Stack>
            <DashBorder marginTop={33} />
            <Stack direction='row' justifyContent='space-between'>
                <Typography>Total Billed</Typography>
                <Typography> <SvgColor sx={{ height: '14px', width: '15px' }} src="/assets/icons/membership/dollar-sign.svg" />9.99</Typography>
            </Stack>
            <DashBorder marginTop={18} />
            <Button onClick={onPayment} fullWidth sx={{ my: 3, bgcolor: 'background.green', color: 'common.white' }} type="submit" variant="contained">
                Pay Now
            </Button>
            <Stack direction='row' justifyContent="center" >
                <Stack alignItems='center'>
                    <Typography pb={1}>Your payment is secure</Typography>
                    <img alt='secure-payment' width={60} src="/assets/images/register/secure-payment.svg" />
                </Stack>
            </Stack>
        </Card>
    )

}
PaymentMethod.propTypes = {
    onPayment: PropTypes.func
}