import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { useRef, useState } from 'react';
import Image from 'next/image';

import _mock from '../../_mock';

import CarouselHeader from '../../components/carousel/CarouselHeader';
// ----------------------------------------------------------------------

export default function Banner() {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handlePrev = () => {
    if (isDisabled) return;
    setPrev(true);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1000);
  };

  const handleNext = () => {
    if (isDisabled) return;
    setNext(true);
    setIsDisabled(true);
    setTimeout(() => setIsDisabled(false), 1000);
  };

  return (
    <Box sx={{ backgroundColor: '#0B0B0B', pt: '30px' }}>
      <Box
        sx={{
          maxWidth: '1440px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          px: { xs: 2.5, sm: 0 },
          mx: { xs: '20px', sm: 'auto' },
        }}
      >
        <Image
          src="/images/Banner/Big_Banner.svg"
          alt="Banner"
          width={1920}
          height={400}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            margin: '0 auto',
          }}
        />
      </Box>
    </Box>
  );
}

