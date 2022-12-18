import {Link,useNavigate} from "react-router-dom"
import React from "react";
import {Authcontext} from "../Contexts/Authcontext"
import {Input,FormLabel,Box,Heading} from "@chakra-ui/react"
function Login() {
  const {isAuth,login,tokendata,settoken}=React.useContext(Authcontext)
  const [inputemail,setemail]=React.useState("");
  const [inputpas,setpas]=React.useState("");
  const navigate=useNavigate();
  const fetchandupdate = async () => {
  
    try {
      const data = await getdata();
      settoken(data);
      if(data){
        login();
        navigate("/cart")
      }
    } catch (err) {
      console.log(err);
    }
  };
 
  const getdata = () => {

    return fetch(`https://reqres.in/api/login`,{
      method:"POST",
       body:JSON.stringify({
        "email": inputemail,
         "password": inputpas
      }),
       headers:{
        "Content-Type":"application/json"
       }
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(tokendata)
  console.log(isAuth)
    function check(e){
      e.preventDefault();
      fetchandupdate();
    }

  return (
    <>
    <Heading color={"teal"} paddingLeft={"500px"} paddingBottom={"50px"}><i>Please Login here!</i></Heading>
    <Box marginLeft={"500px"}>
    <div>
      <form data-testid="login-form">
        <div>
          <label>
          <FormLabel> Email</FormLabel>
            <Input width={"400px"} data-testid="email-input" type="email" placeholder="email" value={inputemail} onChange={(e) => setemail(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
           <FormLabel> Password</FormLabel>
            <Input width={"400px"}
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={inputpas}
              onChange={(e) => setpas(e.target.value)}
            />
          </label>
        </div>
        <div>
          <input data-testid="form-submit" type="submit" value="SUBMIT" onClick={check} padding={"20px"} />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
    </Box>
    </>
  );
}
export default Login;
