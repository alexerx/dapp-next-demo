import { useDisclosure } from '@chakra-ui/react';
import { LoginModal } from './LoginModal';

export const useLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const renderContent = <LoginModal isOpen={isOpen} onClose={onClose} />;

  return {
    onOpen,
    onClose,
    renderContent,
  };
};
