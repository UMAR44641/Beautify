import { useEffect,useState,useContext } from "react";
import axios from "axios";
import Productlist from "../components/Productlist";
import { Inputcontext } from "../Contexts/Inputcontext";
import { HStack,Select,Grid,GridItem } from "@chakra-ui/react";
export default function Products(){
    const [data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  const {inputvalue}=useContext(Inputcontext);
  const [sortvalue,setsortvalue]=useState("");
  const [brand,setbrand]=useState("");
  const [greater,setgreater]=useState("");
  const [lesser,setlesser]=useState("");
  const handlesort=(e)=>{
    setsortvalue(e.target.value)
  }
  const handlebrand=(e)=>{
    setbrand(e.target.value)
  }
  const handlegreater=(e)=>{
    setgreater(e.target.value)
  }
  const handlelesser=(e)=>{
    setlesser(e.target.value)
  }
  console.log(brand)
  console.log(data)
    useEffect(()=>{
        setloading(true);
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`,{
          params:{
            product_type:inputvalue,
            brand:brand,
            price_greater_than:Number(greater),
            price_lesser_than:Number(lesser)
          }
        })
        .then((res)=>{
          setdata(res.data)
          setloading(false);
          if(sortvalue=="increase"){
            let newdata=res.data.sort(function(a,b){return a.price-b.price})
            console.log(res.data)
            setdata(newdata)
          }
          if(sortvalue=="decrease"){
            let newdata2=res.data.sort(function(a,b){return b.price-a.price})
            console.log(res.data)
            setdata(newdata2)
          }
        })
      },[inputvalue,sortvalue,brand,greater,lesser]);
      return (
   <Grid
        h='200px'
        templateRows='repeat(1, 1fr)'
         templateColumns='repeat(5, 1fr)'
       gap={4}
          >
        <GridItem colSpan={1}>
           <Select placeholder='Sort by price' justifyContent={"start"} value={sortvalue} onChange={handlesort} >
             <option value='increase'>Increasing order</option>
             <option value='decrease'>Decreasing order</option>
           </Select>
           <Select placeholder='Sort by brand' justifyContent={"start"} value={brand} onChange={handlebrand} >
             <option value='almay'>almay</option>
             <option value='alva'>alva</option>
             <option value='anna sui'>anna sui</option>
             <option value='annabelle'>annabelle</option>
             <option value='benefit'>benefit</option>
             <option value='boosh'>boosh</option>
             <option value='cargo cosmetics'>cargo cosmetics</option>
             <option value='coastal classic creation'>coastal classic creation</option>
             <option value='suncoat'>suncoat</option>
             <option value='w3llpeople'>w3llpeople</option>
             <option value='zorah'>zorah</option>
             <option value='zorah biocosmetiques'>zorah biocosmetiques</option>
             <option value='wet n wild'>wet n wild</option>
             <option value='sinful colours'>sinful colours</option>
             <option value='smashbox'>smashbox</option>
             <option value='covergirl'>covergirl</option>
           </Select>
           <Select placeholder='price greater than' justifyContent={"start"} value={greater} onChange={handlegreater} >
           <option value='50'>50</option>
           <option value='60'>60</option>
           <option value='100'>100</option>
           <option value='150'>150</option>
           </Select>
           <Select placeholder='price less than' justifyContent={"start"} value={lesser} onChange={handlelesser} >
           <option value='150'>150</option>
           <option value='10'>10</option>
           <option value='60'>60</option>
           <option value='50'>50</option>
           </Select>
       </GridItem>
        <GridItem colSpan={4}>
          <Productlist data={data} loading={loading} innertext="SHOP NOW" />
         </GridItem>
    </Grid>
      )
}