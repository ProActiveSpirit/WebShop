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
} from '../pc';

export default function PlayStationPage() {
  return (
    <>
      <HomePC />

      <GameList key="PlayStation Store Cards" headerText="PlayStation Store Cards" />
      <XboxDescription />
      <Newsroom />
      <Nieuwsbrief />
    </>
  );
}
