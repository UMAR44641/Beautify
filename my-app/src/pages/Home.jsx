import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import axios from "axios";
import {ChevronDownIcon} from "@chakra-ui/icons"
import { useEffect, useState } from 'react';
import Productcard from '../components/Productcard';
import Skeleton from '../components/Skeleton';
import Productlist from '../components/Productlist';
const style={color:"white",backgroundColor:"gray",borderRadius:"0px"};
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}  style={style} marginLeft="80px">
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} style={style}>
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
     {/* {loading?<Skeleton />:homedata&&homedata.map((item)=>(
      <Productcard key={item.id} data={{...item}} />
     ))} */}
     <Productlist homedata={homedata} loading={loading} />
    </>

    )
  }
  