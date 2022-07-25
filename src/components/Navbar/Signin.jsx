import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Box,
  Center,
  Text,
  VStack,
  Link,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { AiOutlineHeart, AiOutlineCodeSandbox } from 'react-icons/ai';
import AuthModal from '../Authentication/AuthModal';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authSlice';

function Signin() {
  const { isAuth, user } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Button
          _hover={{ textDecoration: 'none', bg: 'black' }}
          bg="transparent"
          rightIcon={<FaUserCircle />}
        >
          {isAuth ? user.name : 'Sign in'}
        </Button>
      </PopoverTrigger>
      <PopoverContent bg="black" color="white" w="250px">

        <PopoverBody border="0px" outline={'0px'}>
          <VStack align="start" fontSize=".9rem">
            <Center>
              <RiAccountPinCircleLine />
              <Link ml={2}>Your Account</Link>
            </Center>
            <Center>
              <AiOutlineCodeSandbox />
              <Link ml={2}>Your Orders</Link>
            </Center>
            <Center>
              <AiOutlineHeart />
              <Link ml={2}>Shortlist</Link>
            </Center>
           {!isAuth && <VStack w="100%">
              <Text color="green.300">If you are new user </Text>
              <AuthModal text="Register" />
              <AuthModal text="Login" />
            </VStack>}
            {isAuth && <Button mx='auto' onClick={() => dispatch(logout())} colorScheme='red'>Logout</Button>}
          </VStack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default Signin;
