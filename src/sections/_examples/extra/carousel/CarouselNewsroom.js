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

CarouselNewsroom.propTypes = {
  data: PropTypes.array,
};

export default function CarouselNewsroom({ data, next, prev, setNext, setPrev }) {
  const carouselRef = useRef(null);

  const theme = useTheme();

  const carouselSettings = {
    slidesToShow: 3,
    centerMode: false,
    centerPadding: '0px',
    infinite: false,
    speed: 500,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          rows: 2,
          slidesPerRow: 1,
        },
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
    if (next) {
      handleNext();
      setNext(false);
    }
    if (prev) {
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
          <Box key={item.id}>
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
  const { image, title, type, date } = item;

  const getTypeBackground = (type) => {
    switch (type.toLowerCase()) {
      case 'games':
        return 'linear-gradient(360deg, #107C10 0%, #72D738 100%)';
      case 'guides':
        return 'linear-gradient(180deg, #0078D4 0%, #73B9FF 100%)';
      case 'reviews':
        return 'linear-gradient(180deg, #E60012 0%, #FF7B7B 100%)';
      case 'news':
        return 'linear-gradient(360deg, #8B2BBB 0%, #8903FD 100%);';
      default:
        return 'linear-gradient(180deg, #6B6B6B 0%, #A7A7A7 100%)';
    }
  };

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        width: { xs: '320px', md: '424px' },
        height: { xs: '243px', md: '341px' },
      }}
    >
      <Box sx={{ position: 'relative', height: '100%', width: '100%' }}>
        <Image
          alt={title}
          src={image}
          sx={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 33.64%, #000000 70.64%)',
          }}
        />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: 31 },
          bottom: { xs: 94, md: 124 },
          width: 84,
          height: 30,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '15px 16px',
          gap: '10px',
          background: getTypeBackground(type),
          borderRadius: '9px',
        }}
      >
        {type}
      </Box>

      <Box
        sx={{
          position: 'absolute',
          left: { xs: 20, md: 31 },
          bottom: { xs: 64, md: 84 },
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <Image src="/images/Newsroom/Clock.svg" alt="clock" sx={{ width: 16, height: 16 }} />
        <Typography
          sx={{
            color: '#FFFFFF',
            fontSize: '14px',
            fontWeight: 400,
          }}
        >
          {date}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          width: { xs: 200, md: 256 },
          height: { xs: 48, md: 62 },
          left: { xs: 20, md: 31 },
          bottom: { xs: 20, md: 25 },
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Onest',
            fontWeight: 600,
            fontSize: { xs: 18, md: 24 },
            lineHeight: { xs: '24px', md: '31px' },
            display: 'flex',
            alignItems: 'center',
            color: '#FFFFFF',
          }}
        >
          {title}
        </Typography>
      </Box>
    </Paper>
  );
}
