import { useState, createContext } from "react";
// import {useContext} from "react-router-dom";
export const Cartcontext = createContext();
export default function Cartcontextprovider({ children }) {
  const [cartdata, setcartdata] = useState([]);
  const handlecart = (obj) => {
    setcartdata([...cartdata,obj])
  };
  return (
    <Cartcontext.Provider value={{ cartdata, handlecart }}>
      {children}
    </Cartcontext.Provider>
  );
}
