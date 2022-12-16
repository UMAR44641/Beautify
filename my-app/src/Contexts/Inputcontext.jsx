import { useState, createContext } from "react";
// import {useContext} from "react-router-dom";
export const Inputcontext = createContext();
export default function Inputcontextprovider({ children }) {
  const [inputvalue, setinputvalue] = useState("");
  const handlechange = (e) => {
    setinputvalue(e.target.value)
  };
  return (
    <Inputcontext.Provider value={{ inputvalue, handlechange }}>
      {children}
    </Inputcontext.Provider>
  );
}
