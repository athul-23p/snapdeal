import {
  Box,
  Flex,
  Input,
  VStack,
  Text,
  Button,
  InputGroup,
  InputLeftAddon,
  Spacer,
} from '@chakra-ui/react';
import { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  dob: '',
  phone: '',
  password: '',
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'text-input':
      return { ...state, [payload.name]: payload.value };
    default:
      return state;
  }
};
function SignUp() {
  const [formData, dispatch] = useReducer(reducer, initialState);

  const handleSignUp = () => {
      console.log(formData);
  }
  return (
    <VStack
      w="50%"
      position="absolute"
      top="-50px"
      h="500px"
      left="48%"
      bg="white"
      borderRadius={'8px'}
      boxShadow="md"
    >
      <Flex p={2} justify={'space-between'} align="center" w="100%">
        <Text fontSize="1.2rem" fontWeight="600">
          {' '}
          Sign Up
        </Text>

        <Button variant={'ghost'}>X</Button>
      </Flex>
      <VStack classname="auth-signup-form" spacing="24px">
        <Input
          placeholder="Email"
          name="email"
          onChange={e => dispatch({ type: 'text-input', payload: e.target })}
          value={formData.email}
        />
        <InputGroup>
          <InputLeftAddon children="+91" />
          <Input
            placeholder="Mobile Number"
            name="phone"
            onChange={e => dispatch({ type: 'text-input', payload: e.target })}
            value={formData.phone}
          />
        </InputGroup>
        <Input
          placeholder="Name"
          name="name"
          onChange={e => dispatch({ type: 'text-input', payload: e.target })}
          value={formData.name}
        />
        <InputGroup>
          <InputLeftAddon children="DOB" />
          <Input
            type="date"
            name="dob"
            onChange={e => dispatch({ type: 'text-input', payload: e.target })}
            value={formData.dob}
          />
        </InputGroup>
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={e => dispatch({ type: 'text-input', payload: e.target })}
          value={formData.password}
        />
        <Button
          className=" auth-btn
      auth-btn-continue"
          mt={4}
          w="100%"
          onClick={handleSignUp}
        >
          continue
        </Button>
      </VStack>
    </VStack>
  );
}

export default SignUp;
