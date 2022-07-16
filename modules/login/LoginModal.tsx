import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import { useConnect } from 'wagmi';

export type LoginModalProps = Pick<ModalProps, 'isOpen' | 'onClose'>;

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        {connectors.map((connector) => (
          <Button
            disabled={!connector.ready}
            key={connector.id}
            onClick={() => connect({ connector })}
          >
            {connector.name}
            {!connector.ready && ' (unsupported)'}
            {isLoading &&
              connector.id === pendingConnector?.id &&
              ' (connecting)'}
          </Button>
        ))}

        {error && <div>{error.message}</div>}
      </ModalContent>
    </Modal>
  );
};
