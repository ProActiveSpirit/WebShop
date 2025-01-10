import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { useRef, useState } from 'react';

import _mock from '../../_mock';

import CarouselUitgevers from '../_examples/extra/carousel/CarouselUitgevers';
import { CarouselArrows } from '../../components/carousel';
import CarouselHeader from '../../components/carousel/CarouselHeader';
// ----------------------------------------------------------------------

const streamGames = [
  { id: 1, image: '/images/Uitgevers/Bethesda.svg' },
  { id: 2, image: '/images/Uitgevers/Capcom.svg' },
  { id: 3, image: '/images/Uitgevers/Seea.svg' },
  { id: 4, image: '/images/Uitgevers/Disnep.svg' },
  { id: 5, image: '/images/Uitgevers/Sony.svg' },
  { id: 6, image: '/images/Uitgevers/Nintendo.svg' },
];

export default function Uitgevers({ title = 'Uitgevers' }) {
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
          backgroundColor: '#0B0B0B',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
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
          <Card
            sx={{
              backgroundColor: '#0B0B0B',
              boxShadow: 'none',
              border: 'none',
              borderRadius: '24px',
              width: '100%',
            }}
          >
            <CarouselArrows
              onNext={handleNext}
              onPrevious={handlePrev}
              disabled={isDisabled}
              icon="eva:arrow-ios-forward-fill"
              filled
              sx={{
                '&.arrow': {
                  position: 'absolute',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 9,
                  '&.Mui-disabled': {
                    opacity: 0.48,
                    cursor: 'not-allowed',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.08)',
                    },
                  },
                },
              }}
            >
              <CarouselHeader text={title} />
              <CardContent
                sx={{
                  padding: '0 0px',
                  mt: '30px',
                  ml: '60px',
                  mr: '60px',
                  '@media (max-width: 1439px)': {
                    ml: '0px',
                    mr: '0px',
                  },
                }}
              >
                <CarouselUitgevers
                  data={streamGames}
                  next={next}
                  prev={prev}
                  setNext={setNext}
                  setPrev={setPrev}
                />
              </CardContent>
            </CarouselArrows>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
