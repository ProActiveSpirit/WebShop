import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#0B0B0B',
        padding: '40px 20px',
      }}
    >
      <Box
        sx={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: '35px',
        }}
      >
        {/* First Box - Logo and Company Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: '30px',
          }}
        >
          <img
            src="/images/Footer/DG LOGO.svg"
            alt="Logo"
            style={{ width: '320px', height: '84px' }}
          />

          {/* InfoBar content - Only visible on mobile */}
          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexDirection: 'column',
              gap: '20px',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '10px',
                gap: 1,
                alignItems: 'center',
                width: '436px',
                bgcolor: '#1D1D1D',
                p: 2,
              }}
            >
              <Box component="img" src="/images/Navbar/Authorize.svg" sx={{ height: 20 }} />
              <Typography sx={{ color: 'white', fontSize: '20px' }}>
                Geautoriseerde online winkel sinds 2017
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '436px',
                borderRadius: '10px',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#1D1D1D',
                p: 2,
              }}
            >
              <Box component="img" src="/images/Navbar/Publishers.svg" sx={{ height: 20 }} />
              <Typography sx={{ color: 'white', fontSize: '20px' }}>200+ uitgevers</Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                width: '436px',
                alignItems: 'center',
                borderRadius: '10px',
                bgcolor: '#1D1D1D',
                p: 2,
              }}
            >
              <Box component="img" src="/images/Navbar/Games.svg" sx={{ height: 20 }} />
              <Typography sx={{ color: 'white', fontSize: '20px' }}>
                4.000+ officieel gelicentieerde games
              </Typography>
            </Box>
          </Box>

          {/* Rest of the company info */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <Typography
                sx={{
                  color: '#E3E3E3',
                  fontSize: { xs: '20px', md: '14px' },
                  width: { xs: '600px', md: '288px' },
                  lineHeight: { xs: '24px', md: '16px' },
                  fontWeight: 'bold',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Dreamgame BV - NL855731485B01
              </Typography>
              <Typography
                sx={{
                  color: '#E3E3E3',
                  fontSize: { xs: '20px', md: '14px' },
                  width: { xs: '600px', md: '288px' },
                  lineHeight: { xs: '24px', md: '16px' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Laan van Spitsbergen 13 0, Apeldoorn, Netherlands
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <Typography
                sx={{
                  color: '#E3E3E3',
                  fontSize: { xs: '20px', md: '14px' },
                  width: { xs: '600px', md: '288px' },
                  lineHeight: { xs: '24px', md: '16px' },
                  fontWeight: 'bold',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Support Business Hours:
              </Typography>
              <Typography
                sx={{
                  color: '#E3E3E3',
                  fontSize: { xs: '20px', md: '14px' },
                  width: { xs: '600px', md: '288px' },
                  lineHeight: { xs: '24px', md: '16px' },
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                9am to 6pm CE(S)T / Weekends and after hours - limited
              </Typography>
            </Box>
          </Box>

          {/* Copyright text - Shows last in first box on desktop, moves to bottom on mobile */}
          <Typography
            sx={{
              color: '#E3E3E3',
              fontSize: { xs: '16px', md: '10px' },
              display: { xs: 'none', md: 'block' }, // Hide on mobile
            }}
          >
            Copyright © 2024 DreamGame. All rights reserved.
          </Typography>
        </Box>

        {/* Second Box - Information Links with Trustpilot */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: '20px',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: '#E3E3E3',
              fontWeight: 'bold',
              fontSize: { xs: '22px', md: '16px' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            Information
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {[
              'About Us',
              'Support',
              'Newsroom',
              'Terms and Conditions',
              'Privacy Policy',
              'Contact Us',
              'FAQ',
            ].map((text) => (
              <Typography
                key={text}
                sx={{
                  color: '#E3E3E3',
                  fontSize: { xs: '18px', md: '12px' },
                  cursor: 'pointer',
                  textAlign: { xs: 'center', md: 'left' },
                  '&:hover': {
                    textDecoration: 'underline',
                  },
                }}
              >
                {text}
              </Typography>
            ))}
          </Box>

          {/* Trustpilot - Shows last in second box on desktop, moves to bottom on mobile */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            <img src="/images/Footer/Trustpilot.svg" alt="Trustpilot" style={{ width: '240px' }} />
          </Box>
        </Box>

        {/* Third Box - Payment and Social */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: '55px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <Typography
              sx={{
                color: '#E3E3E3',
                fontSize: { xs: '22px', md: '16px' },
                fontWeight: 'bold',
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Payment Methods
            </Typography>
            <img
              src="/images/Footer/Payment.svg"
              alt="Payment Methods"
              style={{ width: '200px' }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <Typography
              sx={{
                color: '#E3E3E3',
                fontSize: { xs: '24px', md: '18px' },
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Follow Us
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: '15px',
              }}
            >
              <img src="/images/Footer/Social1.svg" alt="Facebook" style={{ width: '24px' }} />
              <img src="/images/Footer/Social2.svg" alt="Twitter" style={{ width: '24px' }} />
              <img src="/images/Footer/Social3.svg" alt="Instagram" style={{ width: '24px' }} />
              <img src="/images/Footer/Social4.svg" alt="LinkedIn" style={{ width: '24px' }} />
              <img src="/images/Footer/Social5.svg" alt="YouTube" style={{ width: '24px' }} />
              <img src="/images/Footer/Social6.svg" alt="TikTok" style={{ width: '24px' }} />
            </Box>
          </Box>
        </Box>

        {/* Mobile-only box for Trustpilot and Copyright */}
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            order: 4, // Ensures this appears last on mobile
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <img src="/images/Footer/Trustpilot.svg" alt="Trustpilot" style={{ width: '240px' }} />
          </Box>
          <Typography sx={{ color: '#E3E3E3', fontSize: '16px' }}>
            Copyright © 2024 DreamGame. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
