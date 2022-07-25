
import { CloseButton, Flex, Input, VStack ,Text,Box,Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { clearTransaction, login } from '../../redux/auth/authSlice';
import { useEffect } from 'react';


function Verification({onClose,handleSetView}){
    const dispatch = useDispatch();
    const {user,isAuth,isLoading,error} = useSelector(store => store.auth);
    const [password,setPassword] = useState("");
    const handleVerification = () => {
        if(password===""){
          alert('Enter password');
          return;
        }
        dispatch(login({email:user.email,password}));
    }    
     console.log(user);
    useEffect(() =>{
      if(user === null){
        handleSetView("");
        dispatch(clearTransaction());
      }
    },[])
    useEffect(() => {
        if(isAuth){
            onClose();
        }
         
    },[isAuth]);
 

    if(error){
     return <VStack
        position={'absolute'}
        w="50%"
        top="-30px"
        left="48%"
        borderRadius={'8px'}
        h="400px"
        bg="white"
        boxShadow={'md'}
        p={4}
      ><Text>Something went wrong</Text></VStack>
    }
    return (
      <VStack
        position={'absolute'}
        w="50%"
        top="-20px"
        left="48%"
        borderRadius={'8px'}
        h="400px"
        bg="white"
        boxShadow={'md'}
        p={4}
      >
        <Flex w="100%" justify={'space-between'}>
          <Text fontWeight="600" fontSize="1.2rem">
            Login on Snapdeal
          </Text>
          <CloseButton onClick={onClose} />
        </Flex>
        <Box className="auth-verification-img"></Box>
        <Text>Please enter password</Text>
      
        <Input placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button className="auth-btn auth-btn-continue" isLoading={isLoading} onClick={handleVerification}>continue</Button>
      </VStack>
    );
}

export default Verification;