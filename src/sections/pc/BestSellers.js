import { Box, Typography, Card, CardHeader, CardContent } from '@mui/material';
import { useRef, useState } from 'react';

import _mock from '../../_mock';

import CarouselBestSeller from '../_examples/extra/carousel/CarouselBestSeller';
import CarouselHeader from '../../components/carousel/CarouselHeader';

// ----------------------------------------------------------------------

const streamGames = [
  {
    id: 1,
    title: 'Bloomtown: A Different Story',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-5',
    image: '/images/BestSeller/Game1.svg',
    platform: ['Xbox', 'Window'],
  },
  {
    id: 2,
    title: 'Hogwarts Legacy',
    price: 56.99,
    oldPrice: 0,
    sales: '0',
    image: '/images/BestSeller/Game2.svg',
    platform: ['Xbox', 'Window'],
  },
  {
    id: 3,
    title: 'Castlevania: Lords of Shadow',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-15',
    image: '/images/BestSeller/Game3.svg',
    platform: ['Steam'],
  },
  {
    id: 4,
    title: 'Funko Fusion',
    price: 56.99,
    oldPrice: 0,
    sales: '0',
    image: '/images/BestSeller/Game4.svg',
    platform: ['Steam'],
  },
  {
    id: 5,
    title: 'Resident Evil 4',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-5',
    image: '/images/BestSeller/Game5.svg',
    platform: ['Xbox', 'Window'],
  },
  {
    id: 6,
    title: 'Kirby Fighters 2',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-10',
    image: '/images/BestSeller/Game6.svg',
    platform: ['Switch'],
  },
  {
    id: 7,
    title: 'RAID: World War II',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-10',
    image: '/images/BestSeller/Game7.svg',
    platform: ['Steam'],
  },
  {
    id: 8,
    title: 'Rocket Knight Adventures: Re-Sparked!',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-10',
    image: '/images/BestSeller/Game8.svg',
    platform: ['Steam'],
  },
  {
    id: 9,
    title: 'CYGNI: All Guns Blazing',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-10',
    image: '/images/BestSeller/Game9.svg',
    platform: ['Steam'],
  },
  {
    id: 10,
    title: 'Silent Hill II',
    price: 56.99,
    oldPrice: 56.99,
    sales: '-10',
    image: '/images/BestSeller/Game10.svg',
    platform: ['Xbox', 'Window', 'PS'],
  },
];

export default function BestSellers() {
  const [next, setNext] = useState(false);
  const [prev, setPrev] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedBox, setSelectedBox] = useState(1);

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
            gap: '24px',
            flexDirection: 'row',
            justifyContent: 'center',
            '@media (max-width: 1439px)': {
              left: 0,
              padding: '0 20px',
              flexDirection: 'column',
              alignItems: 'center',
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
            <CarouselHeader text="Bestsellers" />
            <Box
              sx={{
                width: '708px',
                // flexShrink: 0,
                '@media (max-width: 1439px)': {
                  width: '100%',
                  maxWidth: '648px',
                },
              }}
            >
              <CardContent
                sx={{
                  padding: '0 0px',
                  mt: '30px',
                  ml: '60px',
                  mr: '0px',
                  '@media (max-width: 1439px)': {
                    ml: '0px',
                    mr: '0px',
                  },
                }}
              >
                <CarouselBestSeller data={streamGames} />
              </CardContent>
            </Box>
          </Card>

          <Box
            sx={{
              width: '648px',
              flexShrink: 0,
              '@media (max-width: 1439px)': {
                width: '100%',
                maxWidth: '648px',
              },
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'row', gap: '10px', mt: '30px', ml: '15px' }}
            >
              {[1, 2, 3, 4].map((item) => (
                <Box
                  key={item}
                  onClick={() => setSelectedBox(item)}
                  sx={{
                    borderRadius: '5px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '147px',
                    height: '51px',
                    background:
                      selectedBox === item
                        ? 'linear-gradient(180deg, #E60012 0%, #FF7B7B 100%)'
                        : '#0B0B0B',
                    border: selectedBox === item ? 'none' : '3px solid #434343',
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="h4" sx={{ color: '#FFFFFF' }}>
                    {`<${item * 5}€`}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Card
              sx={{
                backgroundColor: '#0B0B0B',
                boxShadow: 'none',
                border: 'none',
                borderRadius: '24px',
                width: '100%',
              }}
            >
              <CardContent sx={{ padding: '0 0px', mt: '30px', ml: '0px', mr: '0px' }}>
                <CarouselBestSeller data={streamGames} searched={true} />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
