import { Box, Typography, Breadcrumbs, Link, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedTag } from '../../redux/slices/navigation';

export default function HomePC() {
  const dispatch = useDispatch();
  const Tag = useSelector((state) => state.navigation.tag);
  const Menu = useSelector((state) => state.navigation.menu);

  // Early return if Menu is not one of the specified platforms
  if (!['PC', 'Nintendo', 'XBOX', 'PlayStation'].includes(Menu)) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'relative',
        margin: '0 auto',
      }}
    >
      {/* Image */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: '1440 px',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #0B0B0B 72.14%), linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 60%), url(wallpaper_regeneration_01_1920x1080.jpg)`,
            pointerEvents: 'none',
          },
        }}
      >
        <Box
          component="img"
          src={`/images/Home/${Menu}.svg`}
          sx={{
            height: 390,
            width: '1440px',
            maxWidth: 'none',
            position: 'relative',
            left: '50%',
            transform: 'translateX(-50%)',
            objectFit: 'cover',
          }}
        />
      </Box>

      {/* Text Overlay */}
      <Box
        sx={{
          position: 'absolute',
          maxWidth: '1322px',
          width: '100%',
          top: '45%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '36px',
          minWidth: '270px',
          '@media (max-width: 1439px)': {
            padding: '0 26px',
          },
          '@media (max-width: 360px)': {
            width: '80%',
          },
        }}
      >
        <Box sx={{ maxWidth: '1322px' }}>
          {/* Breadcrumb */}
          <Breadcrumbs
            sx={{
              '& .MuiBreadcrumbs-li': {
                height: '22px',
                display: 'flex',
                alignItems: 'center',
              },
              mb: '40px',
            }}
          >
            <Link
              href="/"
              sx={{
                color: '#FF6B00',
                textDecoration: 'none',
                fontSize: '15px',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Home
            </Link>
            <Typography sx={{ color: '#FF6B00', fontSize: '15px' }}>{Menu}</Typography>
          </Breadcrumbs>

          {/* PC Title */}
          <Typography
            variant="h2"
            sx={{
              color: '#FFFFFF',
              fontSize: '30px',
              fontWeight: 500,
              lineHeight: 1,
              mb: Menu === 'PlayStation' ? '65px' : '15px',
            }}
          >
            {Menu}
          </Typography>

          {/* Description */}
          <Typography
            variant="h4"
            sx={{
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '26px',
              maxWidth: Menu === 'PlayStation' ? '454px' : '600px',
              mb: '50px',
              '@media (max-width: 514px)': {
                width: 'auto',
              },
            }}
          >
            {Menu === 'PlayStation'
              ? 'Op zoek naar een PlayStation Network card of PlayStation Plus card? Dan zit je goed bij Dreamgame!'
              : `Discover the best ${Menu} games, DLC, pre-orders and PC bestsellers on special offer at lower prices. Find the latest releases here.`}
          </Typography>

          {/* Category Tags */}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              flexWrap: 'wrap',
              gap: '8px',
              marginTop: '4px !important',
              '& > *': {},
            }}
          >
            {(() => {
              const tagsByPlatform = {
                PC: ['Steam', 'Rockstar', 'Microsoft Store', 'Other'],
                XBOX: [
                  'XBOX Games',
                  'EA Subscription',
                  'XBOX Expansion',
                  'XBOX In-game Currency',
                  'XBOX Gift Cards',
                  'XBOX Game Pass',
                ],
                Nintendo: ['Switch Games', 'Expansions', 'eShop Cards', 'Nintendo Switch Online'],
                PlayStation: [], // No tags for PlayStation
              };

              return tagsByPlatform[Menu]?.map((tag) => (
                <Box
                  key={tag}
                  onClick={() => dispatch(setSelectedTag(tag))}
                  sx={{
                    backgroundColor: Tag === tag ? '#FF7801' : '#434343',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    height: '50px',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    '&:hover': {
                      opacity: 0.8,
                    },
                  }}
                >
                  <Typography sx={{ fontSize: '18px' }}>{tag}</Typography>
                </Box>
              ));
            })()}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
