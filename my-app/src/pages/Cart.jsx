import { useEffect,useState,useContext } from "react";
import axios from "axios";
import Productlist from "../components/Productlist";
import { Inputcontext } from "../Contexts/Inputcontext";
import { Cartcontext } from "../Contexts/Cartcontext";
import { SimpleGrid,Box,
    Center,
    Heading,
    Text,
    Stack,
    Image,
  Button,Table,Th,Thead,Tr,TableContainer,Td,Tbody,
HStack } from "@chakra-ui/react";
export default function Cart(){
  const {cartdata,setcartdata}=useContext(Cartcontext);
  console.log(cartdata);
  const handlequantity=(value,id)=>{
    const updatedData = cartdata.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + value } : item
  );
  setcartdata(updatedData);
  }
      return (
        <>
        <HStack><Heading marginLeft={'100px'} marginRight={"800px"} >Your Cart</Heading><Heading fontSize={"25px"} fontWeight={"light"}>cart SubTotal:-</Heading><Text fontWeight={"bold"} fontSize >${cartdata.reduce((acc, item) => {
        return (acc += item.quantity * item.price);
      }, 0)}</Text></HStack>
        <TableContainer>
  <Table size='sm' width={"900px"} marginLeft="100px" marginTop={"50px"}>
    <Thead>
      <Tr>
        <Th>Product Image</Th>
        <Th>name</Th>
        <Th>brand</Th>
        <Th>price</Th>
        <Th>quantity</Th>
        <Th isNumeric>total price</Th>
      </Tr>
    </Thead>
    <Tbody>
      {cartdata.map((el)=>(
        <Tr>
        <Td> <Image
       rounded={'lg'}
       height={230}
       width={282}
       objectFit={'cover'}
       src={el.image_link}
     /></Td>
        <Td> <Heading fontSize={'14px'} fontFamily={'body'} fontWeight={100} color={"black"}>
       {el.name}
     </Heading></Td>
     <Td><Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
       {el.brand}
     </Text></Td>
     <Td> <Text fontWeight={800} fontSize={'xl'}>
         ${el.price}
       </Text></Td>
       <Td> <HStack><Button disabled={el.quantity===1} _hover={{bg:"black",color:"white"}} onClick={()=>handlequantity(-1,el.id)}>-</Button><Text>{el.quantity}</Text><Button _hover={{bg:"black",color:"white"}} onClick={()=>handlequantity(1,el.id)}>+</Button></HStack></Td>
        <Td isNumeric><Text>Total price:-<b><i>${el.price*el.quantity}</i></b></Text></Td>
      </Tr>
      ))}
      </Tbody>
      </Table>
</TableContainer>
        <TableContainer>
            <Table size='sm' marginLeft={"800px"} width="700px">
         <Thead>
         <Tr>
        <Th width="50px" color="black">cart SubTotal</Th>
        <Th fontSize={'25px'} color="black">${cartdata.reduce((acc, item) => {
        return (acc += item.quantity * item.price);
      }, 0)}</Th>
      </Tr>
    </Thead>
  </Table>
</TableContainer>
        </>
      )
}