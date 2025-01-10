import PropTypes from 'prop-types';
// @mui
import { useTheme } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// components
import NavMobile from './nav/mobile';
import NavDesktop from './nav/desktop';

// ----------------------------------------------------------------------

export default function Header() {
  const theme = useTheme();
  
  // Check if width is greater than 1440px
  const isDesktop = useResponsive('up', 1440);
  // Check if width is between 700px and 1440px
  const isMobile = useResponsive('up', 700);

  return (
    <>
      <AppBar 
        color="transparent" 
        sx={{ 
          boxShadow: 0,
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
        }} 
      >
        <Toolbar
          disableGutters
          sx={{
            width: '100%',
            minWidth: isDesktop ? '100%' : '700px',
            margin: '0 auto',
          }}
        >
          {isDesktop ? <NavDesktop /> : <NavMobile />}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

// ----------------------------------------------------------------------

Shadow.propTypes = {
  sx: PropTypes.object,
};

function Shadow({ sx, ...other }) {
  return (
    <Box
      sx={{
        left: 0,
        right: 0,
        bottom: 0,
        height: 24,
        zIndex: -1,
        m: 'auto',
        borderRadius: '50%',
        position: 'absolute',
        width: `calc(100% - 48px)`,
        boxShadow: (theme) => theme.customShadows.z8,
        ...sx,
      }}
      {...other}
    />
  );
}
