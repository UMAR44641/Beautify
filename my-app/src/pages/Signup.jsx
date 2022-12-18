import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,Button, ButtonGroup 
  } from '@chakra-ui/react'
 export default function Signup(){
       return (
        <FormControl width={"40%"} margin={"auto"}>
        <FormLabel>Name:</FormLabel>
        <Input type='text' placeholder='name' />
        <FormLabel>Email address</FormLabel>
        <Input type='email' placeholder='email' />
        <FormLabel>password</FormLabel>
        <Input type='password' placeholder='password' />
        <FormLabel>Contact</FormLabel>
        <Input type='number' placeholder='cell no.' />
        <Button marginTop={"10px"} width={"600px"} colorScheme='blue'>Submit</Button>
        </FormControl>
      )
}