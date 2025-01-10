import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
// components
import ScrollProgress from '../../components/scroll-progress';
// sections
import {
  HomePC,
  HomePlatform,
  GameList,
  Uitgevers,
  BestSellers,
  Catergory,
  Banner,
  Newsroom,
  Nieuwsbrief,
  SeeMore,
} from '../pc';

export default function PCPage() {
  const selectedTag = useSelector((state) => state.navigation.tag);

  const getGameCarousel = (selectedTag) => {
    switch (selectedTag) {
      case 'Steam':
        return ['StreamGames'];
      case 'Rockstar':
        return ['RockStar', 'Cashcard'];
      case 'Microsoft Store':
        return ['WindowsGames', 'GiftCards'];
      case 'Other':
        return ['Antstream arcade', 'DRM Free', 'Dual Universe', 'SecuROM'];
      default:
        return ['StreamGames', 'RockStar'];
    }
  };

  const gameCarousel = getGameCarousel(selectedTag);

  return (
    <>
      <HomePC />
      <HomePlatform />

      {gameCarousel.map((text) => (
        <GameList key={text} headerText={text} />
      ))}

      {(selectedTag === 'Steam' || selectedTag === null) && (
        <>
          <Uitgevers />
          <BestSellers />
          <Catergory />
        </>
      )}

      {selectedTag === 'Other' && <SeeMore />}

      <Banner />
      <Newsroom />
      <Nieuwsbrief />
    </>
  );
}
