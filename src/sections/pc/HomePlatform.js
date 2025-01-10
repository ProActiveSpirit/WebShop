import { Box, Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';

export default function HomePlatform() {
  const Tag = useSelector((state) => state.navigation.tag);
  const Menu = useSelector((state) => state.navigation.menu);

  // Early return if Menu is not one of the specified platforms
  if (!['PC', 'Nintendo', 'XBOX'].includes(Menu)) {
    return null;
  }

  if (Menu === 'XBOX' && Tag !== 'XBOX Games' && Tag !== null) return null;
  if (Menu === 'Nintendo' && Tag !== 'Switch Games' && Tag !== 'Expansions' && Tag !== null)
    return null;

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#2A2A2D',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#0B0B0B',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1322px',
            width: '100%',
            display: 'flex',
            position: 'relative',
            margin: '0 auto',
            '@media (max-width: 1439px)': {
              left: 0,
              padding: '0 20px',
            },
          }}
        >
          <Box
            component="img"
            src={`/images/Platform/${
              Menu === 'XBOX'
                ? 'XBOX'
                : Menu === 'Nintendo'
                ? 'Nintendo'
                : Tag === null || Tag === 'Steam'
                ? 'Steam'
                : Tag === 'Rockstar'
                ? 'Rockstar'
                : 'Other'
            }.svg`}
            sx={{
              height: 452,
              maxWidth: 'none',
              position: 'relative',
              left: '50%',
              transform: 'translateX(-50%)',
              objectFit: 'cover',
              background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #2A4054 100%)',
              borderRadius: '24px',
              '@media (max-width: 1440px)': {
                width: '100%',
                maxWidth: '100%',
                left: 0,
                transform: 'none',
                objectFit: 'contain',
                height: 'auto',
              },
            }}
          />
          {Tag !== null && (
            <Box
              sx={{
                position: 'absolute',
                right: '80px',
                top: '50%',
                width: '30%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                alignItems: 'flex-end',
                '@media (max-width: 1440px)': {
                  right: '40px',
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{ color: '#fff', fontWeight: 'bold', textAlign: 'right' }}
              >
                {`${
                  Menu === 'XBOX'
                    ? 'Starfield'
                    : Menu === 'Nintendo'
                    ? 'Super Mario Party Jamboree'
                    : Tag === null || Tag === 'Steam'
                    ? 'Elden Ring'
                    : Tag === 'Rockstar'
                    ? 'Red Dead Redemption II'
                    : 'Minecraft'
                }`}
              </Typography>

              <Box sx={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                {Menu === 'PC' ? (
                  <>
                    <Box
                      component="img"
                      src="/images/Platform/StreamPlatform.svg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Box
                      component="img"
                      src="/images/Platform/Window.svg"
                      sx={{ width: 24, height: 24 }}
                    />
                  </>
                ) : Menu === 'XBOX' ? (
                  <Box
                    component="img"
                    src="/images/Platform/XBOX_Platform.svg"
                    sx={{ width: 167, height: 24 }}
                  />
                ) : Menu === 'Nintendo' ? (
                  <Box
                    component="img"
                    src="/images/Platform/Switch_Platform.svg"
                    sx={{ width: 24, height: 24 }}
                  />
                ) : null}
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  justifyContent: 'flex-end',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Typography
                    sx={{
                      fontWeight: 'bold',
                      backgroundColor: '#E70012',
                      border: '1px solid #E70012',
                      borderRadius: '4px',
                      padding: '4px 8px',
                      color: '#fff',
                    }}
                  >
                    -5%
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <Typography sx={{ color: '#666', textDecoration: 'line-through' }}>
                      $59.99
                    </Typography>
                    <Typography sx={{ color: '#fff', fontWeight: 'bold' }}>$56.99</Typography>
                  </Box>
                </Box>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FF7801',
                    '&:hover': { backgroundColor: '#e66e00' },
                    borderRadius: '8px',
                    width: '57px',
                    height: '53px',
                    padding: 0,
                    minWidth: 'unset',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src="/images/Platform/Cart.svg"
                    sx={{
                      width: 30,
                      height: 30,
                      display: 'block',
                    }}
                  />
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
