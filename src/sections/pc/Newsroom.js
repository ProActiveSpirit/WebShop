import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { useRef, useState } from 'react';

import _mock from '../../_mock';

import CarouselNewsroom from '../../sections/_examples/extra/carousel/CarouselNewsroom';
import { CarouselArrows } from '../../components/carousel';
import CarouselHeader from '../../components/carousel/CarouselHeader';
// ----------------------------------------------------------------------

const newsRoomGames = [
  {
    id: 1,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Blog1.svg',
    type: 'Games',
  },
  {
    id: 2,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Blog2.svg',
    type: 'Guides',
  },
  {
    id: 3,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Blog3.svg',
    type: 'Reviews',
  },
  {
    id: 4,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Blog4.svg',
    type: 'News',
  },
];

export default function Newsroom() {
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
            <CarouselHeader text="Newsroom" />
            <CardContent
              sx={{
                padding: '0 0px',
                mt: '30px',
                ml: '20px',
                mr: '20px',
                '@media (max-width: 1439px)': {
                  ml: '0px',
                  mr: '0px',
                },
              }}
            >
              <CarouselNewsroom data={newsRoomGames} />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
