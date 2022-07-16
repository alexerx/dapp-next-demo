import { Box } from '@chakra-ui/react';
import { AppNavbar } from './AppNavbar';
import { HomeNavBar } from './HomeNavbar';

export const Navbar: React.FC = () => {
  return (
    <Box position={'sticky'} top={0}>
      <HomeNavBar />
      <AppNavbar />
    </Box>
  );
};
