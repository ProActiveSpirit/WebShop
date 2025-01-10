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

export default function XboxPage() {
  const selectedTag = useSelector((state) => state.navigation.tag);

  const getGameCarousel = (selectedTag) => {
    switch (selectedTag) {
      case 'XBOX Games':
        return ['XBOX One Games', 'XBOX Series X|S Games'];
      case 'EA Subscription':
        return ['EA Subscription'];
      case 'XBOX Expansion':
        return ['The Sims Expansion', 'Diablo Expansion', 'Dragon Age', 'Other Expansion'];
      case 'XBOX In-game Currency':
        return ['Red Dead Online', 'Apex Legends', 'GTA Online', 'PUBG'];
      case 'XBOX Gift Cards':
        return ['XBOX Gift Cards'];
      case 'XBOX Game Pass':
        return ['XBOX Game Pass'];
      default:
        return [
          'XBOX One Games',
          'XBOX Series X|S Games',
          'XBOX Game Pass',
          'BestSellers',
          'Giftcards',
          'In-game Currency',
        ];
    }
  };

  const gameCarousel = getGameCarousel(selectedTag);

  return (
    <>
      <HomePC />
      <HomePlatform />

      {selectedTag === 'XBOX In-game Currency' && <Uitgevers title="Game Titles" />}

      {gameCarousel.map((text) =>
        text === 'BestSellers' && selectedTag === null ? (
          <BestSellers />
        ) : (
          <GameList key={text} headerText={text} />
        )
      )}
      {selectedTag === 'XBOX Games' && <BestSellers />}
      {(selectedTag === 'XBOX Expansion' || selectedTag === 'XBOX In-game Currency') && <SeeMore />}
      {(selectedTag === 'XBOX Gift Cards' || selectedTag === 'XBOX Game Pass') && (
        <XboxDescription />
      )}
      <Newsroom />
      <Nieuwsbrief />
    </>
  );
}
