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

CarouselBestSeller.propTypes = {
  data: PropTypes.array,
  searched: PropTypes.bool,
};

export default function CarouselBestSeller({ data, searched }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(1, 1fr)',
        gap: 2,
        padding: 2,
        overflow: 'hidden',
      }}
    >
      {data.slice(0, 10).map((item) => (
        <Box key={item.id}>
          <CarouselItem item={item} searched={searched} />
        </Box>
      ))}
    </Box>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  searched: PropTypes.bool,
};

function CarouselItem({ item, searched }) {
  const theme = useTheme();

  const getIdColor = (id) => {
    switch (id) {
      case 1:
        return '#FF7801';
      case 2:
        return '#FFB06A';
      case 3:
        return '#FFDBBB';
      default:
        return '#D9D9D9';
    }
  };

  const { id, image, platform, sales, price, oldPrice } = item;

  return (
    <Paper
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        height: 63,
        backgroundColor: '#454549',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {!searched && (
          <Box
            sx={{
              width: '32px',
              height: '63px',
              backgroundColor: getIdColor(id),
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#000000',
              }}
            >
              {id}
            </Typography>
          </Box>
        )}
        <Image
          src={image}
          sx={{
            width: 46,
            maxWidth: 46,
            height: 'auto',
            objectFit: 'contain',
          }}
        />
      </Box>
      <Typography
        sx={{
          position: 'absolute',
          maxWidth: '150px',
          height: '34px',
          left: '95px',
          top: 'calc(50% - 17px)',
          fontFamily: 'Onest',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '17px',
          display: 'flex',
          alignItems: 'center',
          color: '#FFFFFF',
        }}
      >
        {item.title}
      </Typography>

      {/* Platform */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          height: '24px',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          gap: '8px',
        }}
      >
        {platform?.map((item, index) => (
          <Image
            key={index}
            src={`/images/BestSeller/${item}.svg`}
            sx={{
              width: 'auto',
              height: '24px',
              objectFit: 'contain',
            }}
          />
        ))}
      </Box>

      {/* Sale Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '8px 5px',
          gap: '53px',
          position: 'absolute',
          width: '34px',
          height: '32px',
          right: '147px',
          top: 'calc(50% - 32px/2 + 0.5px)',
          background: '#E60012',
          borderRadius: '4px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Onest',
            fontWeight: 500,
            fontSize: '14px',
            lineHeight: '17px',
            color: '#FFFFFF',
          }}
        >
          {sales}%
        </Typography>
      </Box>

      {/* Price Box */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: '0px',
          position: 'absolute',
          width: '50px',
          height: '32px',
          right: '76px',
          top: 'calc(50% - 32px/2 + 1.5px)',
        }}
      >
        {oldPrice !== 0 && (
          <Typography
            sx={{
              fontSize: '12px',
              textDecoration: 'line-through',
              color: '#8C8C8C',
              lineHeight: '14px',
            }}
          >
            €{oldPrice}
          </Typography>
        )}
        <Typography
          sx={{
            fontSize: '14px',
            color: '#FFFFFF',
            lineHeight: '17px',
          }}
        >
          €{price}
        </Typography>
      </Box>

      {/* Cart Image */}
      <Box
        sx={{
          position: 'absolute',
          width: '42px',
          height: '37px',
          right: '18px',
          top: 'calc(50% - 37px/2 + 1px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '1px solid black',
          backgroundColor: '#0B0B0B',
          borderRadius: '4px',
        }}
      >
        <Image
          src="/images/BestSeller/Cart.svg"
          sx={{
            width: '23px',
            height: '18px',
            objectFit: 'contain',
          }}
        />
      </Box>
    </Paper>
  );
}
