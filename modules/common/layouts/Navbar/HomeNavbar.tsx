import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';

export const HomeNavBar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box px={4} zIndex={9999}>
      <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
        <Box>MintVip</Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={2}>
            <Button bg="transparent" onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <Link href="/app">
              <Button size={'lg'} colorScheme={'brand'}>
                Launch App
              </Button>
            </Link>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};
