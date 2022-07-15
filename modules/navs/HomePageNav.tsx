import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Flex,
  Stack,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';

export const HomePageNav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
      position="sticky"
      top={0}
      zIndex={9999}
    >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>MintVip</Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Link href="/app">
              <Button colorScheme="purple">Launch App</Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
