import { Box, Grid, Button } from '@mui/material';
import Label from '../../../../components/label';

export default function MainHeader() {
    return (
      <Box sx={{ height: 80, width: '100%' }} >
      <Box sx={{ 
          height: 28, 
          width: '100%',
          maxWidth: 1322,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
          paddingTop: '40px'
        }} >
          <Grid container spacing={2}>
            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
              <Box component="img" src="/images/Navbar/DG LOGO.svg"  />
            </Grid>
            <Grid item xs={6} sx={{ 
              display: 'flex', 
              justifyContent: 'flex-start', 
              alignItems: 'center',
              position: 'relative'
            }}>
              <Box sx={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center' }}>
                <Box
                  component="input"
                  sx={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '4px',
                    border: 'none',
                    padding: '0 40px 0 12px',
                    '&:focus': {
                      outline: 'none'
                    }
                  }}
                  placeholder="Zoek Winkel"
                />
                <Box
                  sx={{
                    position: 'absolute',
                    right: 0,
                    height: '40px',
                    width: '40px',
                    backgroundColor: '#FF7801',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <Box component="img" src="/images/Navbar/Search.svg" sx={{ height: 20 }} />
                </Box>
              </Box>
              
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                ml: 2,
                border: '1px solid #666666',
                borderRadius: '4px',
                padding: '4px 8px 4px 8px',
                height: '32px'
              }}>
                <Box 
                  component="img" 
                  src="/images/Navbar/Language.svg" 
                  sx={{ 
                    mr: 1,
                    display: 'flex'
                  }} 
                />
                <Box sx={{ 
                  color: '#FFFFFF', 
                  fontSize: '15px',
                  fontFamily: 'Onest',
                  fontWeight: 'bold',
                  lineHeight: 1
                }}>NL</Box>
              </Box>
            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#FF7801',
                  '&:hover': { bgcolor: '#e66e00' },
                  height: '40px',
                  px: 3
                }}
              >
                Log In
              </Button>
              
              <Box sx={{ 
                display: 'flex', 
                gap: 2 
              }}>
                <Box
                  component="button"
                  sx={{
                    border: '1px solid #666666',
                    borderRadius: '4px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'transparent',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <Box component="img" src="/images/Navbar/Heart.svg" sx={{ height: 20 }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      bgcolor: '#FF7801',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px'
                    }}
                  >
                    0
                  </Box>
                </Box>
                <Box
                  component="button"
                  sx={{
                    border: '1px solid #666666',
                    borderRadius: '4px',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'transparent',
                    cursor: 'pointer',
                    position: 'relative'
                  }}
                >
                  <Box component="img" src="/images/Navbar/Cart.svg" sx={{ height: 20 }} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      bgcolor: '#FF7801',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontSize: '12px'
                    }}
                  >
                    0
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
    </Box>
    );
}