import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { Nav } from '../../modules/app/Nav';

const App: NextPage = () => {
  return (
    <>
      <Nav />
      <Box h={'100vh'}>111</Box>
    </>
  );
};

export default App;
