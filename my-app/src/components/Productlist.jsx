import { SimpleGrid,Heading } from '@chakra-ui/react'
import Productcard from './Productcard'
import Skeletontemplate from './Skeleton'
export default function Productlist({data,loading,innertext}){
    if(data.length===0){
        return <Heading margin={"50px"} marginLeft={"250px"}><i>No products match your search!</i></Heading>
    }
    return (
        // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.

<SimpleGrid columns={[2, null, 4]} spacing='40px'>
{loading?<Skeletontemplate />:data&&data.map((item)=>(
      <Productcard key={item.id} data={{...item}} innertext={innertext} />
     ))}
</SimpleGrid>
    )
}