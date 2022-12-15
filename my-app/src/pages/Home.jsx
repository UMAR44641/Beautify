import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text
} from '@chakra-ui/react';
import axios from "axios";
import {ChevronDownIcon} from "@chakra-ui/icons"
import { useEffect, useState } from 'react';
import Productlist from '../components/Productlist';
import Footer from '../components/Footer';
// import ControlledCarousel from '../components/Carousel';
const style={borderRadius:"0px"};
export default function Home() {
  const [homedata,sethomedata]=useState([]);
  const [loading,setloading]=useState(false);
  useEffect(()=>{
    setloading(true);
    axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`,{
      params:{
        limit:10,
        price_greater_than:30
      }
    })
    .then((res)=>{
      sethomedata(res.data)
      setloading(false);
      console.log(res.data)
    })
  },[])
    return (
    <>
      <hr style={{border:"1px solid black"}} />
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}  style={style} _hover={{backgroundColor:"black",color:"white"}}  marginLeft="80px">
       Brands
      </MenuButton>
     <MenuList>
      <MenuItem>Beauty Blender</MenuItem>
      <MenuItem>Bobo</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>Alo</MenuItem>
      <MenuItem>Asop</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Holiday Gifts
      </MenuButton>
     <MenuList>
      <MenuItem>Shop All Holiday Beauty <span> ......</span>Gifts Our Favorite Beauty Gift Sets</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Holiday Gift Ideas for Him</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Budget Friendly and Small GiftsStocking Stuffer IdeasThoughtful Gifts for Smart</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Gifts For You</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Skincare
      </MenuButton>
     <MenuList>
      <MenuItem>View All Hair Care</MenuItem>
      <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Hair
      </MenuButton>
     <MenuList>
     <MenuItem>Shop All Holiday Beauty <span> ......</span>Gifts Our Favorite Beauty Gift Sets</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Holiday Gift Ideas for Him</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Budget Friendly and Small GiftsStocking Stuffer IdeasThoughtful Gifts for Smart</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Gifts For You</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Makeup
      </MenuButton>
     <MenuList>
     <MenuItem>View All Hair Care</MenuItem>
      <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Body
      </MenuButton>
     <MenuList>
      <MenuItem>Beauty Blender</MenuItem>
      <MenuItem>Bobo</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>Alo</MenuItem>
      <MenuItem>Asop</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Fragrance
      </MenuButton>
     <MenuList>
     <MenuItem>View All Hair Care</MenuItem>
      <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      <MenuItem>View All Hair Care</MenuItem>
      <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Tools
      </MenuButton>
     <MenuList>
      <MenuItem>Beauty Blender</MenuItem>
      <MenuItem>Bobo</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>Alo</MenuItem>
      <MenuItem>Asop</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Self-care
      </MenuButton>
     <MenuList>
     <MenuItem>Shop All Holiday Beauty <span> ......</span>Gifts Our Favorite Beauty Gift Sets</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Holiday Gift Ideas for Him</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Budget Friendly and Small GiftsStocking Stuffer IdeasThoughtful Gifts for Smart</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Gifts For You</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Trending
      </MenuButton>
     <MenuList>
      <MenuItem>Beauty Blender</MenuItem>
      <MenuItem>Bobo</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>Alo</MenuItem>
      <MenuItem>Asop</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Blog
      </MenuButton>
     <MenuList>
      <MenuItem>Beauty Blender</MenuItem>
      <MenuItem>Bobo</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>Alo</MenuItem>
      <MenuItem>Asop</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       Routine
      </MenuButton>
     <MenuList>
     <MenuItem>Shop All Holiday Beauty <span> ......</span>Gifts Our Favorite Beauty Gift Sets</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Holiday Gift Ideas for Him</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Budget Friendly and Small GiftsStocking Stuffer IdeasThoughtful Gifts for Smart</MenuItem>
      <MenuItem>SkinStore's Holiday Edit Box</MenuItem>
      <MenuItem>Gifts For You</MenuItem>
      </MenuList>
     </Menu>
     <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style= {style} _hover={{backgroundColor:"black",color:"white"}} >
       New
      </MenuButton>
     <MenuList>
     <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      <MenuItem>View All Hair Care</MenuItem>
      <MenuItem>Lip Care</MenuItem>
      <MenuItem>brushed</MenuItem>
      <MenuItem>oils</MenuItem>
      <MenuItem>treatments</MenuItem>
      </MenuList>
     </Menu>
     <Text fontSize='xl' fontWeight='bold' backgroundColor="black" color="white" paddingLeft="200px" marginTop="20px" _hover={{backgroundColor:"white",color:"black"}}>
     25% off with code REPLAY + free PCA SKIN Rejuvenate and Hydrate Duo (worth $33.50) @ $130+ | SHOP NOW >
        </Text>
     <Productlist data={homedata} loading={loading} innertext="SHOP NOW" />
     <Footer />
    </>

    )
  }
  