import PropTypes from 'prop-types';
// @mui
import { Stack, Box, Grid } from '@mui/material';
//
import InfoBar from './InfoBar';
import MainHeader from './MainHeader';
import NavigationMenu from './NavigationMenu';
// ----------------------------------------------------------------------

NavDesktop.propTypes = {
  data: PropTypes.array,
  isOffset: PropTypes.bool,
};

export default function NavDesktop() {
  return (
    <Stack
      direction="column"
      sx={{
        backgroundColor: '#0B0B0B',
        width: '100%',
      }}
    >
      <InfoBar />
      <MainHeader />
      <NavigationMenu />
    </Stack>
  );
}
