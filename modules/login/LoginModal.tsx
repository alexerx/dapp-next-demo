import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';

export type LoginModalProps = Pick<ModalProps, 'isOpen' | 'onClose'>;

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>666</ModalBody>
      </ModalContent>
    </Modal>
  );
};
