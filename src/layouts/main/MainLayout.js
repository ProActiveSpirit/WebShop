import PropTypes from 'prop-types';
// next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useResponsive from '../../hooks/useResponsive';

// @mui
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

//
const Header = dynamic(() => import('./Header'), { ssr: false });
const Footer = dynamic(() => import('./Footer'), { ssr: false });

// ----------------------------------------------------------------------

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default function MainLayout({ children }) {
  const { pathname } = useRouter();
  const isHome = pathname === '/';

  const isDesktop = useResponsive('up', 1440);
  const isMobile = useResponsive('up', 700);

  return (
    <Box sx={{ bgcolor: '#0B0B0B', minHeight: '100vh', width: '100%' }}>
      <Header />

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: '100%',
          mt: isDesktop ? '94px' : '35px',
          p: 0,
        }}
      >
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            ...(!isHome && {
              pt: { xs: 8, md: 11 },
            }),
          }}
        >
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}
