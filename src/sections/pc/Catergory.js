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

const imageData = [
  { id: 1, image: '/images/Catergory/Component1.svg', title: 'Action' },
  { id: 2, image: '/images/Catergory/Component2.svg', title: 'Adventure' },
  { id: 3, image: '/images/Catergory/Component3.svg', title: 'RPG' },
  { id: 4, image: '/images/Catergory/Component4.svg', title: 'Strategy' },
  { id: 5, image: '/images/Catergory/Component5.svg', title: 'Sports' },
  { id: 6, image: '/images/Catergory/Component6.svg', title: 'Racing' },
  { id: 7, image: '/images/Catergory/Component7.svg', title: 'Simulation' },
  { id: 8, image: '/images/Catergory/Component8.svg', title: 'Puzzle' },
  { id: 9, image: '/images/Catergory/Component9.svg', title: 'Horror' },
  { id: 10, image: '/images/Catergory/Component10.svg', title: 'Fighting' },
  { id: 11, image: '/images/Catergory/Component11.svg', title: 'Family' },
  { id: 12, image: '/images/Catergory/Component12.svg', title: 'Indie' },
];

export default function Catergory() {
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
            <CarouselHeader text="Catergories" />
            <Box
              sx={{
                maxWidth: '1332px',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: {
                  xs: 'repeat(4, 1fr)',
                  sm: 'repeat(4, 1fr)',
                  md: 'repeat(4, 1fr)',
                  lg: 'repeat(4, 1fr)',
                },
                gap: {
                  xs: '9px',
                  sm: '10px',
                },
                padding: {
                  xs: '9px',
                  sm: '24px',
                },
                margin: '0 auto',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {imageData.map((category) => (
                <Box
                  key={category.id}
                  sx={{
                    position: 'relative',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    width: '100%', // Make container full width
                    '&:hover': {
                      transform: 'scale(1.03)',
                      transition: 'transform 0.3s ease',
                    },
                  }}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    style={{
                      width: '100%', // Make image full width
                      height: 'auto', // Maintain aspect ratio
                      maxHeight: '104px', // Maximum height
                      objectFit: 'cover',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
