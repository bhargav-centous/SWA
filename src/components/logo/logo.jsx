import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
// import { useTheme } from '@mui/material/styles';


import { RouterLink } from 'src/routes/components';

import { useAuthContext } from 'src/auth/hooks';

import { useSettingsContext } from '../settings';

// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {
  // const theme = useTheme();
  const settingContext = useSettingsContext()
  const { authenticated } = useAuthContext();
  const isMini = (settingContext.themeLayout === 'mini')
  // const PRIMARY_LIGHT = theme.palette.primary.light;

  // const PRIMARY_MAIN = theme.palette.primary.main;

  // const PRIMARY_DARK = theme.palette.primary.dark;

  // // OR using local (public folder)
  // // -------------------------------------------------------
  // // const logo = (
  // //   <Box
  // //     component="img"
  // //     src="/logo/logo_single.svg" => your path
  // //     sx={{ width: 40, height: 40, cursor: 'pointer', ...sx }}
  // //   />
  // // );

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        // width: 40,
        // height: 40,
        marginBottom: '52px',
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      {authenticated ? <img style={{ width: isMini ? '50px' : 150 }} alt='header-icon' src={`/assets/${isMini ? 'mini-logo.svg' : 'swa-logo.svg'}`} /> : <img style={{ width: isMini ? '50px' : '' }} alt='header-icon' src={`/assets/${isMini ? 'mini-logo.svg' : 'swa-logo.svg'}`} />}

    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default Logo;
