import { useState } from 'react';
import { 
  Box, 
  Drawer, 
  IconButton, 
  List, 
  ListItem, 
  ListItemText,
  Stack,
  Button
} from '@mui/material';

export default function NavMobile() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <Stack direction="column" sx={{ backgroundColor: '#0B0B0B', width: '100%' }}>
        <Box sx={{ 
          height: 100, 
          px: 2,
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between'
        }}>
          <Box component="img" src="/images/Navbar/DG LOGO.svg" sx={{ height: 65 }} />

          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <IconButton sx={{ bgcolor: '#FF7801', borderRadius: '4px' }}>
              <Box component="img" src="/images/Navbar/Search.svg" sx={{ height: 31 }} />
            </IconButton>

            <IconButton sx={{ color: 'white', position: 'relative' }}>
              <Box component="img" src="/images/Navbar/Cart.svg" sx={{ height: 31 }} />
              <Box sx={{
                position: 'absolute',
                top: -4,
                right: -4,
                bgcolor: '#FF7801',
                borderRadius: '50%',
                width: 16,
                height: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '10px'
              }}>
                0
              </Box>
            </IconButton>
            <IconButton sx={{ color: 'white' }}>
              <Box component="img" src="/images/Navbar/User.svg" sx={{ height: 41 }} />
            </IconButton>

            <IconButton 
              sx={{ color: 'white' }}
              onClick={() => setIsDrawerOpen(true)}
            >
              <Stack direction="column" spacing={1}>
                <Box component="img" src="/images/Navbar/Line1.svg" sx={{ height: 4 }} />
                <Box component="img" src="/images/Navbar/Line2.svg" sx={{ height: 4 }} />
                <Box component="img" src="/images/Navbar/Line3.svg" sx={{ height: 4 }} />
              </Stack>
            </IconButton>
          </Box>
        </Box>
      </Stack>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: '80%',
            maxWidth: 360,
            bgcolor: '#454549',
            color: 'white'
          }
        }}
      >
        <Box sx={{ p: 2 }}>
          {/* Login Button */}
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: '#FF7801',
              '&:hover': { bgcolor: '#e66e00' },
              height: '40px',
              mb: 2
            }}
          >
            Log In
          </Button>

          {/* Navigation Links */}
          <List>
            {['PC', 'XBOX', 'Nintendo', 'PlayStation', 'Pre-Orders', 'Nieuwe Games', 'Cadeaubonnen', 'Dream deal', 'Support', 'Newsroom'].map((text) => (
              <ListItem key={text} sx={{ py: 1 }}>
                <ListItemText 
                  primary={text} 
                  sx={{ 
                    '& .MuiTypography-root': { 
                      fontSize: '15px',
                      color: text === 'Dream deal' ? '#FF7801' : 'white'
                    }
                  }} 
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
