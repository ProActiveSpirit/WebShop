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

CarouselCenterMode.propTypes = {
  data: PropTypes.array,
};

export default function CarouselCenterMode({ data, next, prev, setNext, setPrev }) {
  const carouselRef = useRef(null);
  const theme = useTheme();

  const carouselSettings = {
    infinite: true,
    speed: 500,
    variableWidth: true,
    centerMode: false,
    rtl: Boolean(theme.direction === 'rtl'),
    slidesToShow: 1,
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
        width: '100%',
        maxWidth: {
          xs: '100%',
          md: '1440px',
        },
        mx: 'auto',
      }}
    >
      <Carousel ref={carouselRef} {...carouselSettings}>
        {data.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              px: {
                xs: 1, // 8px spacing on mobile
                md: 1.25, // 10px spacing on desktop
              },
            }}
          >
            <CarouselItem item={item} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  const theme = useTheme();

  const { image, title, platform, price, oldPrice, date, dealCounter } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        width: {
          xs: '280px', // smaller on very small screens
          sm: '320px', // mobile width
          md: '250px', // tablet
          lg: '199px', // desktop width
        },
        height: {
          xs: '616px', // smaller on very small screens
          sm: '706px', // mobile height
          md: '500px', // tablet
          lg: '436px', // desktop height
        },
      }}
    >
      <Image alt={title} src={image} ratio="3/4" sx={{ height: '65%', objectFit: 'cover' }} />

      {/* Deal Counter */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          padding: '3px 5px',
          gap: '10px',
          position: 'absolute',
          left: '13px',
          top: '12px',
          background: '#E60012',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '4px',
          fontSize: {
            xs: '20px',
            md: '14px',
          },
        }}
      >
        <Typography color="white" fontSize="12px">
          {dealCounter}
        </Typography>
      </Box>

      <Box
        sx={{
          height: '5%',
          width: '100%',
          left: '0px',
          right: '0px',
          top: '65%',
          background: '#D9D9D9',
          position: 'absolute',
          zIndex: 9,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {platform.map((item) => (
          <Image
            key={item}
            alt={item}
            src={`/images/StreamGame/${item}.svg`}
            sx={{
              height: '20px',
              width: 'auto',
              mx: '2px',
            }}
          />
        ))}
      </Box>

      <CardContent
        sx={{
          top: '70%',
          bottom: '0px',
          zIndex: 9,
          width: '100%',
          textAlign: 'left',
          position: 'absolute',
          backgroundColor: '#454549',
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            width: '100%',
            height: '34px',
            left: '13px',
            top: '11px',
            fontFamily: 'Onest',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: {
              xs: '23px',
              md: '14px',
            },
            lineHeight: {
              xs: '28px',
              md: '17px',
            },
            textTransform: 'capitalize',
            color: '#FFFFFF',
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            left: '13px',
            right: '13px',
            bottom: '35%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '3px 5px',
              background: '#E60012',
              borderRadius: '4px',
              width: '66px',
              height: '22px',
            }}
          >
            <Typography color="white" fontSize="12px">
              {date.includes('.') ? date : `In ${date} Days`}
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            {oldPrice !== 0 && (
              <Typography
                sx={{
                  fontFamily: 'Onest',
                  fontSize: {
                    xs: '23px',
                    md: '12px',
                  },
                  fontWeight: 500,
                  lineHeight: '15px',
                  color: '#A2A2A2',
                  textDecoration: 'line-through',
                  textTransform: 'uppercase',
                }}
              >
                €{oldPrice}
              </Typography>
            )}

            <Typography
              sx={{
                color: 'white',
                fontSize: {
                  xs: '26px',
                  md: '14px',
                },
                fontWeight: '500',
              }}
            >
              €{price}
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'absolute',
            left: '13px',
            right: '13px',
            gap: '15px',
            top: '85%',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              width: {
                xs: '15%',
                md: '34px',
              },
              height: '34px',
              background: '#161616',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              alt="wishlist"
              src="/images/StreamGame/Wish.svg"
              sx={{ width: '20px', height: 'auto', mt: '2px' }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              width: {
                xs: '80%',
                md: '130px',
              },
              height: '34px',
              right: '0px',
              background: '#161616',
              borderRadius: '4px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '5px',
            }}
          >
            <Image
              alt="wishlist"
              src="/images/StreamGame/Cart.svg"
              sx={{ width: '20px', height: 'auto' }}
            />
            <Typography color="white" fontSize="12px">
              Add to Cart
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Paper>
  );
}
