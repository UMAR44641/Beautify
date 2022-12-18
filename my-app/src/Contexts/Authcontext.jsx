import { useState, createContext } from "react";
export const Authcontext = createContext();
function AuthContextProvider({children}) {
    const [isAuth, setAuth] = useState(false);
    const [tokendata,settoken]=useState(null);
    const login = () => {
      setAuth(true);
    };
  return (
    <Authcontext.Provider value={{ isAuth,login,tokendata,settoken }}>
      {children}
    </Authcontext.Provider>
  );
}

export default AuthContextProvider;
