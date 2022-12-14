import { Skeleton,SimpleGrid,Box } from '@chakra-ui/react'
export default function Skeletontemplate (){
    return (
        <SimpleGrid columns={[2,null,4]} spacingX='370px' spacingY="100px" marginLeft="50px" marginTop="50px">
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>'
         <Box><Skeleton height='350px' width="300px" /></Box>
         <Box><Skeleton height='350px' width="300px" /></Box>
        </SimpleGrid>
    )
}