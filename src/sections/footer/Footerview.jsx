import React from 'react'

import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

const Footerview = () => (
    <Stack direction='row' px={2} justifyContent='space-between' py={3}>
        <Typography variant='footertext'>© Sustainable World Alliance 2024</Typography>
        <Typography variant='footertext'>Legal Notice - Data protection  Need Help</Typography>
    </Stack>
)

export default Footerview