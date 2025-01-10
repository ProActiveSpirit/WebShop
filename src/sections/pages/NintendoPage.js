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
  XboxDescription,
  SeeMore,
} from '../pc';

export default function NintendoPage() {
  const selectedTag = useSelector((state) => state.navigation.tag);

  const getGameCarousel = (selectedTag) => {
    switch (selectedTag) {
      case 'Switch Games':
        return ['Pre-Order Games', 'Action Games'];
      case 'Expansions':
        return [
          'Dragon Quést Expansion',
          'Kirby Clash Expansion',
          'Super Smash Bro Expansion',
          'Super Smash Bro Expansion                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ',
        ];
      case 'eShop Cards':
        return ['eShop Cards'];
      case 'Nintendo Switch Online':
        return ['Nintendo Switch Online'];
      default:
        return ['eShop Cards', 'Nintendo Switch Online', 'Pre-Order Games', 'Expansion Pass'];
    }
  };

  const gameCarousel = getGameCarousel(selectedTag);

  return (
    <>
      <HomePC />
      <HomePlatform />

      {selectedTag === 'Expansions' && <Uitgevers title="Find Expansion By Games" />}

      {gameCarousel.map((text) =>
        text === 'BestSellers' && selectedTag === null ? (
          <BestSellers />
        ) : (
          <GameList key={text} headerText={text} />
        )
      )}
      {(selectedTag === null || selectedTag === 'Switch Games') && (
        <>
          <BestSellers />
          <Uitgevers />
          <Catergory />
        </>
      )}
      {selectedTag === 'Expansions' && <SeeMore />}
      <Banner />
      <Newsroom />
      <Nieuwsbrief />
    </>
  );
}
