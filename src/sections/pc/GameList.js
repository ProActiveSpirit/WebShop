import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { useRef, useState } from 'react';

import _mock from '../../_mock';

import CarouselCenterMode from '../_examples/extra/carousel/CarouselCenterMode';
import { CarouselArrows } from '../../components/carousel';
import CarouselHeader from '../../components/carousel/CarouselHeader';
// ----------------------------------------------------------------------

const streamGames = [
  {
    id: 1,
    title: 'Rocket Knight Adventures: Re-Sparked!',
    price: 29.99,
    oldPrice: 56.99,
    date: '3',
    image: '/images/StreamGame/Game1.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Steam'],
  },
  {
    id: 2,
    title: 'Starfield Standard Edition',
    price: 56.99,
    oldPrice: 0,
    date: '10',
    image: '/images/StreamGame/Game2.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Xbox', 'Window'],
  },
  {
    id: 3,
    title: 'Hands of Necromancy II',
    price: 9.99,
    oldPrice: 0,
    date: '01.11.24',
    image: '/images/StreamGame/Game3.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Steam'],
  },
  {
    id: 4,
    title: 'SILENT HILL 2',
    price: 69.99,
    oldPrice: 0,
    date: '30.11.24',
    image: '/images/StreamGame/Game4.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Steam'],
  },
  {
    id: 5,
    title: 'CYGNI: All Guns Blazing',
    price: 27.99,
    oldPrice: 0,
    date: '30.12.24',
    image: '/images/StreamGame/Game5.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Steam'],
  },
  {
    id: 6,
    title: 'Resident Evil 4',
    price: 37.99,
    oldPrice: 0,
    date: '30.12.25',
    image: '/images/StreamGame/Game6.svg',
    dealCounter: 'DEALS END IN 10:00:01',
    platform: ['Xbox', 'Window'],
  },
];

export default function GameList({ headerText }) {
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
              <CarouselHeader text={headerText} />
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
                <CarouselCenterMode
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
