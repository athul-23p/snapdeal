import { Button, Center, CloseButton, Flex, Input, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearTransaction, getUser } from "../../redux/auth/authSlice";


function LoginSignUp({onClose,handleSetView}){
    const [userCredential,setUserCredential] = useState("");
    const dispatch = useDispatch();
    const {isLoading,userExists,error,user} = useSelector(store => store.auth);
   

    const handleLogin = () => {
        dispatch(getUser(userCredential));
    }

    useEffect(() => {
      handleSetView("");
    },[]);
   
    useEffect(() => {
      if(userExists && user !== null){
        handleSetView('VERIFICATION');
      } else {
        if(user === null){
          handleSetView('')
        }
        else if(user?.email === null ){
          handleSetView('SIGNUP');
        } 
      }
    

    },[userExists,user]);
   
    return (
      <VStack position={'absolute'} w="50%" top="-30px" left="48%" borderRadius={'8px'} h='400px' bg='white' boxShadow={'md'} p={4} className='auth-loginsignup'>
        <Flex w='80%' justify='space-between'>
        <Text fontSize={'1.1rem'} textAlign='left '>Login/Sign Up on Snapdeal</Text>
        <CloseButton onClick={onClose}/>
        </Flex>
        <Text w='80%' mb={2}>
          Please provide your Mobile Number or Email to Login/ Sign Up on
          Snapdeal
        </Text>
        <Input placeholder="Mobile Number/Email" w="80%" name='userCredential' onChange={(e) => setUserCredential(e.target.value)} value={userCredential}/>
        <Button mt={8}  className="auth-btn auth-btn-continue" onClick={handleLogin} isLoading={isLoading}>
          continue
        </Button>
      </VStack>
    );
}

export default LoginSignUp;