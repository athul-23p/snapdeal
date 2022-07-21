import './AuthModal.css';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
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

function AuthModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} borderRadius="0px" className="auth-btn login">
        Login
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="700px" className='content' p={0}>
         
          <ModalBody as={Box} w="700px" position={'relative'}>
            <Flex w="700px" className="auth-bg" >
              <VStack
                spacing="48px"
                className="auth-bg-contents"
                align="flex-start"
              >
                <HStack align='start'>
                  <Box className="auth-bg-img auth-bg-img1"></Box>
                  <Box pt={1}>
                    <Text textTransform={'uppercase'} fontWeight="600">
                      manage your orders
                    </Text>
                    <Text>Track orders,manage cancellations & return</Text>
                  </Box>
                </HStack>
                <HStack align='start'>
                  <Box className="auth-bg-img auth-bg-img2"></Box>
                  <Box pt={1}>
                    <Text textTransform={'uppercase'} fontWeight="600">
                      shortlist items you love
                    </Text>
                    <Text>Keep items you love on a watchlist</Text>
                  </Box>
                </HStack>
                <HStack align='start'>
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
          <LoginSignUp />
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AuthModal;
