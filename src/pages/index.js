// next
import Head from 'next/head';
// layouts
import MainLayout from '../layouts/main';
// pages
import PCPage from '../sections/pages/PCPage';
import PlayStationPage from '../sections/pages/PlayStationPage';
import XboxPage from '../sections/pages/XboxPage';
import NintendoPage from '../sections/pages/NintendoPage';
import NewsRoom from '../sections/pages/NewsRoom';
import { useSelector } from 'react-redux';

// ----------------------------------------------------------------------

HomePage.getLayout = (page) => <MainLayout> {page} </MainLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const selectedMenu = useSelector((state) => state.navigation.menu);

  const renderContent = () => {
    switch (selectedMenu) {
      case 'PC':
        return <PCPage />;
      case 'PlayStation':
        return <PlayStationPage />;
      case 'XBOX':
        return <XboxPage />;
      case 'Nintendo':
        return <NintendoPage />;
      case 'Newsroom':
        return <NewsRoom />;
      default:
        return <PCPage />; // Default to PC page
    }
  };

  return (
    <>
      <Head>
        <title> DreamGame - Official Retailer of Game Codes</title>
      </Head>

      {renderContent()}
    </>
  );
}
