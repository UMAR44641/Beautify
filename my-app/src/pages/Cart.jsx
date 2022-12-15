import { useEffect,useState,useContext } from "react";
import axios from "axios";
import Productlist from "../components/Productlist";
import { Inputcontext } from "../Contexts/Inputcontext";
import { Cartcontext } from "../Contexts/Cartcontext";
import { SimpleGrid,Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image, } from "@chakra-ui/react";
export default function Cart(){
  const {cartdata}=useContext(Cartcontext)
  console.log(cartdata)
      return (
        <SimpleGrid columns={4} spacing={10}  >
            {cartdata.map((el)=>(
 <Center py={12}>
 <Box  height="430px"
   role={'group'}
   p={6}
   maxW={'70%'}
   w={'full'}
   boxShadow={'2xl'}
   rounded={'lg'}
   pos={'relative'}
   >
   <Box
     rounded={'lg'}
     mt={-12}
     pos={'relative'}
     height={'230px'}
     _after={{
       transition: 'all .3s ease',
       content: '""',
       w: 'full',
       h: 'full',
       pos: 'absolute',
       top: 5,
       left: 0,
       filter: 'blur(15px)',
       zIndex: -1,
     }}
     _groupHover={{
       _after: {
         filter: 'blur(20px)',
       },
     }}>
     <Image
       rounded={'lg'}
       height={230}
       width={282}
       objectFit={'cover'}
       src={el.image_link}
     />
   </Box>
   <Stack pt={10} align={'center'}>
     <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
       {el.brand}
     </Text>
     <Heading fontSize={'s'} fontFamily={'body'} fontWeight={500}>
       {el.name}
     </Heading>
     <Stack direction={'row'} align={'center'}>
       <Text fontWeight={800} fontSize={'xl'}>
         ${el.price}
       </Text>
     </Stack>
   </Stack>
 </Box>
</Center>
            ))}
        </SimpleGrid>
      )
}