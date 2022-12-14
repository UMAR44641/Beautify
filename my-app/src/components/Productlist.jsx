import { SimpleGrid } from '@chakra-ui/react'
import Productcard from './Productcard'
import Skeletontemplate from './Skeleton'
export default function Productlist({homedata,loading}){
    return (
        // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
// will have the same effect.

<SimpleGrid columns={[2, null, 4]} spacing='40px'>
{loading?<Skeletontemplate />:homedata&&homedata.map((item)=>(
      <Productcard key={item.id} data={{...item}} />
     ))}
</SimpleGrid>
    )
}