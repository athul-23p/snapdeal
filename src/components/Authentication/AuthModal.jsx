import './AuthModal.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
  Box,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import LoginSignUp from './LoginSignUp';
import SignUp from './SignUp';
import Verification from './Verification';
import { useEffect, useState } from 'react';
function AuthModal({ text }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [view, setView] = useState('');
  const handleSetView = val => setView(val);
  let Trigger;
  if (text == 'Register') {
    Trigger = () => (
      <Text onClick={onOpen} cursor="pointer">
        Register
      </Text>
    );
  } else {
    Trigger = () => (
      <Button onClick={onOpen} borderRadius="0px" className="auth-btn login">
        {text}
      </Button>
    );
  }

  let View;
  // console.log(view);
  switch (view) {
    case 'SIGNUP':
      View = () => <SignUp onClose={onClose} handleSetView={handleSetView} />;
      break;
    case 'VERIFICATION':
      View = () => (
        <Verification onClose={onClose} handleSetView={handleSetView} />
      );
      break;
    default:
      View = () => (
        <LoginSignUp onClose={onClose} handleSetView={handleSetView} />
      );
  }
  return (
    <>
      <Trigger />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="700px" maxH='340px' className="content" p={0}>
          <ModalBody as={Box} w="700px" position={'relative'}>
            <Flex w="700px" className="auth-bg">
              <VStack
                spacing="48px"
                className="auth-bg-contents"
                align="flex-start"
                m={4}
              >
                <HStack align="start">
                  <Box className="auth-bg-img auth-bg-img1"></Box>
                  <Box pt={1}>
                    <Text textTransform={'uppercase'} fontWeight="600">
                      manage your orders
                    </Text>
                    <Text>Track orders,manage cancellations & return</Text>
                  </Box>
                </HStack>
                <HStack align="start">
                  <Box className="auth-bg-img auth-bg-img2"></Box>
                  <Box pt={1}>
                    <Text textTransform={'uppercase'} fontWeight="600">
                      shortlist items you love
                    </Text>
                    <Text>Keep items you love on a watchlist</Text>
                  </Box>
                </HStack>
                <HStack align="start">
                  <Box className="auth-bg-img auth-bg-img3"></Box>
                  <Box pt={1}>
                    <Text textTransform={'uppercase'} fontWeight="600">
                      awesome offers update for you
                    </Text>
                    <Text>Be first to know about great offers and save.</Text>
                  </Box>
                </HStack>
              </VStack>
            </Flex>
            <View />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AuthModal;
