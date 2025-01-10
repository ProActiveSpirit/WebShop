import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
// @mui
import { alpha, useTheme } from '@mui/material/styles';
import { Box, Paper, Link, CardContent, Typography } from '@mui/material';
// utils
import { bgGradient } from '../../../../utils/cssStyles';
// components
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
import TextMaxLine from '../../../../components/text-max-line';
import Carousel, { CarouselArrows } from '../../../../components/carousel';

// ----------------------------------------------------------------------

CarouselUitgevers.propTypes = {
  data: PropTypes.array,
};

export default function CarouselUitgevers({ data, next, prev, setNext, setPrev }) {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const carouselSettings = {
    slidesToShow: 6,
    centerMode: true,
    centerPadding: '10px',
    infinite: true,
    speed: 500,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0' },
      },
    ],
  };

  const handlePrev = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  useEffect(() => { 
    if(next) {
      handleNext();
      setNext(false);
    }
    if(prev) {
      handlePrev();
      setPrev(false);
    }
  }, [next, prev]);

  return (
    <Box
      sx={{
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* <CarouselArrows
        filled
        icon="noto:rightwards-hand"
        onNext={handleNext}
        onPrevious={handlePrev}
      > */}
        <Carousel ref={carouselRef} {...carouselSettings}>
          {data.map((item) => (
            <Box key={item.id} sx={{ px: '10px' }}>
              <CarouselItem item={item} />
            </Box>
          ))}
        </Carousel>
      {/* </CarouselArrows> */}
    </Box>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  const theme = useTheme();

  const { image } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        height: 110,
      }}
    >
      <Image
        src={image}
        sx={{
          width: 130,
          maxWidth: 263,
          height: 'auto',
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
        }}
      />
    </Paper>
  );
}
