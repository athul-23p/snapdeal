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
  CloseButton,
} from '@chakra-ui/react';
import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearTransaction, signup } from '../../redux/auth/authSlice';

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
function SignUp({onClose,handleSetView}) {
  const [formData, dispatch] = useReducer(reducer, initialState);
  const {isLoading,error} = useSelector(store => store.auth);

  const reduxDispatch = useDispatch();
  const handleSignUp = () => {
      console.log(formData);
      for(let key in formData){
        if(formData[key] === ""){
          alert('Fill all fields');
          return;
        }
      }

      reduxDispatch(signup(formData)).then(() => {
        alert('Signup Successfull');
        reduxDispatch(clearTransaction());
        onClose();
      });
  }

  const handleClose = () => {{
        reduxDispatch(clearTransaction());
        handleSetView("");
        onClose();
  }}
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
          Sign Up
        </Text>
        <CloseButton onClick={handleClose} />
        
      </Flex>
      <VStack className="auth-signup-form" spacing="24px">
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