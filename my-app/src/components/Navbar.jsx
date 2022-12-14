import { ReactNode } from 'react';
import {Link as RouterLink} from "react-router-dom";
import src from "../img/imageedit_1_4258181875.png"
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
  Image
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
          <Input variant='outline' placeholder='Search for a product...' width="600px" borderColor="black" />
          <Button marginLeft="-340px"><Search2Icon /></Button>
          <Flex alignItems={'center'}>
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