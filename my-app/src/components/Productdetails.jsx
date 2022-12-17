import {
    Box,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    useColorModeValue
  } from '@chakra-ui/react';
import { useContext } from 'react';
  import { MdLocalShipping } from 'react-icons/md';
  import { Cartcontext } from '../Contexts/Cartcontext';
  export default function Productdetails({image_link,name,price,brand,id,onClose}) {
    const {cartdata,handlecart}=useContext(Cartcontext);
    const addtocart=(name,brand,price,id,image_link)=>{
        const obj={name,brand,price,id,image_link,quantity:1};
        // alert("Item Added")
        onClose();
        var flag=false;
        cartdata&&cartdata.forEach((e)=>{
            if(e.id===id){
                flag=true;
                return;
            }
        })
        if(flag==false){
            handlecart(obj)
        }
    }
    console.log("this is cart",cartdata)
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image_link
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '300px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: 'm', sm: 'm', lg: 'm' }}>
               {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ${price}
              </Text>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                {brand}
              </Text>
            </Box>
            <Button
              onClick={()=>(addtocart(name,brand,price,id,image_link))}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'xm'}
              py={'3'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }