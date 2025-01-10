import { Box, Typography, } from '@mui/material';

// ----------------------------------------------------------------------


export default function Nieuwsbrief() {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#0B0B0B',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
        <Box
          sx={{
            maxWidth: '1440px',
            height: '292.5px',
            backgroundColor: '#434343',
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
          <Box sx={{ 
            mt:'50px', 
            mb: '50px',
            alignItems: 'center',
            textAlign: 'center',
            '@media (max-width: 1439px)': {
              mt: '20px',
              mb: '20px',
            },
          }}>
            <Typography
                sx={{
                position: 'absolute',
                width: '231px',
                height: '45px',
                fontFamily: 'Onest',
                fontWeight: 700, 
                fontSize: '40px',
                lineHeight: '45px',
                display: 'flex',
                left: '50%',
                transform: 'translateX(-50%)',
                color: '#E3E3E3',
                }}
            >
                Nieuwsbrief
            </Typography>
            <Typography
                sx={{
                    position: 'absolute',
                    width: '531px',
                    height: '45px',
                    top: '110px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontFamily: 'Onest',
                    fontWeight: 700, 
                    fontSize: '20px',
                    lineHeight: '24px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#E3E3E3', 
                    '@media (max-width: 1439px)': {
                        width: '331px',
                        height: '45px',
                        top: '110px',
                    },
                }}
            >
                Meld u aan voor de nieuwsbrief en blijf op de hoogte.
            </Typography>
            
            <Box
              sx={{
                position: 'absolute',
                top: '180px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                width: '100%',
                maxWidth: '600px',
                padding: '0 20px',
              }}
            >
              
              <Box sx={{ display: 'flex' }}>
                <input
                  type="email"
                  placeholder="Enter Email"
                  style={{
                    flex: 1,
                    padding: '12px 16px',
                    borderRadius: '4px 0 0 4px',
                    border: 'none',
                    fontSize: '16px',
                    backgroundColor: '#FFFFFF',
                  }}
                />
                <button
                  style={{
                    padding: '12px 24px',
                    backgroundColor: '#FF7801',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '0 4px 4px 0',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                  }}
                >
                  Submit
                </button>
              </Box>

              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '20px',
                marginBottom: '10px' 
              }}>
                <label style={{ color: '#E3E3E3', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="radio"
                    name="subscription"
                    value="subscribe"
                    defaultChecked
                    style={{ accentColor: '#FF7801' }}
                  />
                  Abonneren
                </label>
                <label style={{ color: '#E3E3E3', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <input
                    type="radio"
                    name="subscription"
                    value="unsubscribe"
                    style={{ accentColor: '#FF7801' }}
                  />
                  Afmelden
                </label>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  );
}