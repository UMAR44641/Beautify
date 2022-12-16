import { useEffect,useState,useContext } from "react";
import axios from "axios";
import Productlist from "../components/Productlist";
import { Inputcontext } from "../Contexts/Inputcontext";
export default function Products(){
    const [data,setdata]=useState([]);
  const [loading,setloading]=useState(false);
  const {inputvalue}=useContext(Inputcontext);
  console.log(data)
    useEffect(()=>{
        setloading(true);
        axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json`,{
          params:{
            product_type:inputvalue
          }
        })
        .then((res)=>{
          setdata(res.data)
          setloading(false);
          console.log(res.data)
        })
      },[inputvalue]);
      return (
        <Productlist data={data} loading={loading} innertext="SHOP NOW" />
      )
}