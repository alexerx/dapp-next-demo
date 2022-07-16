import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Stack, useColorMode } from '@chakra-ui/react';
import { useLogin } from '../login/useLogin';

export const Nav: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { renderContent: loginModalRenderContent, onOpen: openLoginModal } =
    useLogin();

  const handleConnect = () => {
    openLoginModal();
  };

  return (
    <>
      <Box px={4} zIndex={9999}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>MintVip</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={2}>
              <Button bg="transparent" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Button size={'lg'} colorScheme={'main'} onClick={handleConnect}>
                Connect
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      {loginModalRenderContent}
    </>
  );
};
