import { ReactNode,useContext,useState } from 'react';
import {Link as RouterLink} from "react-router-dom";
import src from "../img/imageedit_1_4258181875.png";
import { Inputcontext } from '../Contexts/Inputcontext';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Image,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, Search2Icon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {inputvalue,handlechange}=useContext(Inputcontext)
  console.log(inputvalue)
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} padding="30px">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
           <RouterLink to="/" key="/">
             <Image
              boxSize='150px'
              objectFit='cover'
              src={src}
              alt='gggggg'
              />
            </RouterLink>
          <Input variant='outline' placeholder='Search for a product...' width="600px" borderColor="black" value={inputvalue} onChange={handlechange} />
          <RouterLink to="/products" key="/products"><Button marginLeft="-150px"><Search2Icon /></Button></RouterLink>
          <Flex alignItems={'center'}>
            <Button marginRight="50px"><RouterLink to="/cart" key="/cart"><Avatar 
                  size={'sm'}
                  src={
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHYAAAB/CAMAAAANdsbrAAAAaVBMVEX///86OjpAQEBDQ0P09PSRkZHk5ORSUlIzMzNOTk7u7u60tLT8/Pw9PT03NzeioqKoqKi8vLzd3d3ExMTQ0NCIiIiurq6ampp9fX1YWFjX19dfX18rKytsbGxmZmYkJCQVFRV1dXULCwvVXUMAAAAD6klEQVRoge2a6W6jMBCAfRIHfGBszgTa7Ps/5A4k3VZqWrzRNP3jT5WCguPB4/FchZBMJpPJZDKZTCaTyfwuvn6jfKbUV6vshjo+UWz4o64wTosnyvVuoz4xFZ8o9g1nrfsFsUGZ4RfENpwdxfPFihM//59NaY0gVg/mHK6XZZECkmo6a/vtorY0BdOgiI2KzZvaRsv24VxVKGKF5XxTXDgkAGJxjrkGh3HTm96DlAeukDa3NZveNEmw0MjYiCOVVMrI1LEdpcljd2he2JKquJZSHIsC7Vp2THQYYAcM5/wAM6OJ1llydkDzpJKqLm1ktOaCJZV4SxODkLO0RxNbUDamqW5hNqCJ1QfG0mzK8sSBScxMJS2iOPNEtSTRU5vkBCATwbOozUCXlHHSoOZdhbkFoR1m5CxzZDTB+QjOOWpOPSS52kaxBSOPuqK3INTuD/QKLfxciZQt++EWnChW+LkCSQPdLfw0+KgpJRdIRs/sPO0NKi3HTuTBYewGoel8SzFxWKfqKJt99S0eMgu88LMi5JFzo3ag/IwXfgB9UcxQQ9e/b6oBal5R+w1OcTrLBHAXyzmtMSdMo3hhJ5Fgopgnlmx58iWpJMBFnPkhLbDgPtrMzDKVu2C3GibLzXm3sjWnEnm5/gVq3F0UrrnDEgo5HneZf6A5qcUuGqdH80Fm4nT4h0yXX82pN1X8gFANe3s6nOTdvdNEuOUwDrtZwP/jlWWcWSir7qyo4ApuUuWwtzYqCLbr5OrOkiA5ZnAfgm1iDZwMeKl5KpvR3KtwnGKHUBYDxe6Ilme+9S4azvjn7YWCYQ2z+vaJxxaB1n1b2Od+olZruqjXJNngahni7bIGPljQnaKZ3eqewVCPKhayC7u6296y8bOtgrhBr7UoR2qt/gNyKTvL2fJ7DZv4wukoBxiC3duHzBEOJpyf4V6S4Sxj1HCLHvfWPBny4KO7P203WqV4+xP/LSqCD/fnhUcpow/I+3qdWL9dfH0TH/3t3E9PKTOZTCaTyWQymUwmc+Ohiqwh+tZT0/rt3SH4uH293dLfdlQfkqr7tbUlujLcpvBbh0DIaz37XvF6OXTt5DzxdWhD30YpSe3hq0eEDqF2dd30l24Il6r1Q5RdLUPvpRPEdd7VUkpHJijhpyD6OFWlr0RVibZp5OR9Hx5pUelYOdK6pqrL4PzUkuCrQpZLEBdHRE96PbgYelIURLekiV742g0NDPGdcJdaFsMjjXTddZWuuj728Ox97LTzoQttAesMcfIuyuCbuL0x1gTS9YVrBfFBTnXf9B0RYUJ5H+GZbQL9bjr6g9luL9r9s/EPzZRthH7/4Vf8BVUlOdXNitIgAAAAAElFTkSuQmCC'
                  }
                /></RouterLink> <h1>Cart</h1></Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'} 
                minW={0}>
                <Avatar 
                  size={'sm'}
                  src={
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNIOff5AuP0YdnbId7smDM0mrE4_Etc-_dA&usqp=CAU'
                  }
                />
            
              </MenuButton>
              <h1>Account</h1>
              <MenuList  style={{paddingLeft:"50px",backgroundColor:"gray",color:"white"}}>
                <RouterLink to="/signup" key="/signup">Signup</RouterLink>                
                <MenuDivider />
                <RouterLink to="/login" key="/login">Login</RouterLink>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      
    </>
  );
}