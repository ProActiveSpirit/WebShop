import PropTypes from 'prop-types';
import { useRef, useEffect, useState } from 'react';
// @mui
import { alpha, useTheme, Paper } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// components
import ScrollProgress from '../../components/scroll-progress';
import Image from '../../components/image';
// sections
import { SeeMore, Newsroom, Nieuwsbrief } from '../pc';

const sampleData = [
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
    type: 'Guides',
  },
  {
    id: 5,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Frame 133.svg',
    type: 'Games',
  },
  {
    id: 6,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Frame 134.svg',
    type: 'News',
  },
  {
    id: 7,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Frame 135.svg',
    type: 'Games',
  },
  {
    id: 8,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/Frame 136.svg',
    type: 'Reviews',
  },
  {
    id: 9,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/left.svg',
    type: 'Guides',
  },
  {
    id: 10,
    title: 'Kingdom Come: Deliverance II – What We Know So Far',
    date: '2 days ago',
    image: '/images/Newsroom/right1.svg',
    type: 'Reviews',
  },
];

export default function NewsRoom() {
  const [newsRoomGames, setNewsRoomGames] = useState(sampleData);

  const handleFilter = (type) => {
    if (type.toLowerCase() === 'all') {
      setNewsRoomGames(sampleData);
    } else {
      const filteredData = sampleData
        .map((item) => ({
          ...item,
          type: type,
        }))
        .filter((item) => item.type.toLowerCase() === type.toLowerCase());
      setNewsRoomGames(filteredData);
    }
  };

  return (
    <>
      <Box
        sx={{
          maxWidth: '1322px',
          pt: '30px',
          height: '100px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          margin: '0 auto',
          padding: { xs: '30px 20px 60px', md: '30px 0 60px' },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: 'Onest',
            fontWeight: 800,
            fontSize: '50px',
            lineHeight: '64px',
            color: '#FFFFFF',
          }}
        >
          Newsroom
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '28px',
            alignItems: 'center',
          }}
        >
          <Typography
            onClick={() => handleFilter('all')}
            sx={{
              width: '52px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '16px',
              background: 'linear-gradient(180deg, #E74579 0%, #F15AD3 100%)',
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                color: '#E0E0E0',
              },
            }}
          >
            All
          </Typography>
          <Typography
            onClick={() => handleFilter('news')}
            sx={{
              width: '76px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '16px',
              background: 'linear-gradient(360deg, #8B2BBB 0%, #8903FD 100%)',
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                color: '#E0E0E0',
              },
            }}
          >
            News
          </Typography>
          <Typography
            onClick={() => handleFilter('games')}
            sx={{
              width: '84px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '16px',
              background: 'linear-gradient(360deg, #107C10 0%, #72D738 100%)',
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                color: '#E0E0E0',
              },
            }}
          >
            Games
          </Typography>

          <Typography
            onClick={() => handleFilter('reviews')}
            sx={{
              width: '97px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '16px',
              background: 'linear-gradient(180deg, #E60012 0%, #FF7B7B 100%)',
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                color: '#E0E0E0',
              },
            }}
          >
            Reviews
          </Typography>
          <Typography
            onClick={() => handleFilter('guides')}
            sx={{
              width: '85px',
              height: '50px',
              color: '#FFFFFF',
              fontSize: '16px',
              background: 'linear-gradient(360deg, #00439C 0%, #6B9BED 100%)',
              borderRadius: '9px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              '&:hover': {
                color: '#E0E0E0',
              },
            }}
          >
            Guides
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: '1322px',
          margin: '0 auto',
          padding: { xs: '30px 20px 60px', md: '30px 0 60px' },
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
        }}
      >
        {/* First Row - Featured Layout */}
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            width: '100%',
            height: { xs: 'auto', md: '462px' },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          {/* Left large item */}
          <Box sx={{ width: { xs: '100%', md: '70%' }, height: '100%' }}>
            <CarouselItem item={newsRoomGames[8]} />
          </Box>

          {/* Right column with 2 items */}
          <Box
            sx={{
              width: { xs: '100%', md: '30%' },
              display: 'flex',
              flexDirection: { xs: 'row', md: 'column' },
              gap: '30px',
            }}
          >
            <Box sx={{ height: '47%', width: { xs: '50%', md: '100%' } }}>
              <CarouselItem item={newsRoomGames[2]} />
            </Box>
            <Box sx={{ height: '47%', width: { xs: '50%', md: '100%' } }}>
              <CarouselItem item={newsRoomGames[1]} />
            </Box>
          </Box>
        </Box>

        {/* Rows 2-4 with equal sized items */}
        {[3, 5, 7].map((startIndex) => (
          <Box
            key={startIndex}
            sx={{
              display: 'flex',
              gap: '30px',
              width: '100%',
              flexDirection: 'row',
            }}
          >
            <Box
              sx={{
                width: { xs: '50%', md: '648px' },
                height: { xs: '200px', md: '462px' },
              }}
            >
              <CarouselItem item={newsRoomGames[startIndex]} />
            </Box>
            <Box
              sx={{
                width: { xs: '50%', md: '648px' },
                height: { xs: '200px', md: '462px' },
              }}
            >
              <CarouselItem item={newsRoomGames[startIndex + 1]} />
            </Box>
          </Box>
        ))}
      </Box>
      <SeeMore />
      <Nieuwsbrief />
    </>
  );
}

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
};

function CarouselItem({ item }) {
  if (!item) return null;

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
    <Box
      sx={{
        borderRadius: 2,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
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
          width: { xs: 200, md: 356 },
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
    </Box>
  );
}
