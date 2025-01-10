import { Box, Typography } from '@mui/material';

export default function SeeMore() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '84px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '154px',
          height: '54px',
          backgroundColor: '#FF7801',
          borderRadius: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '500',
            color: '#FFFFFF',
          }}
        >
          See More
        </Typography>
      </Box>
    </Box>
  );
}
