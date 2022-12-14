import Allroutes from "./components/Allroutes";
import {NavLink} from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Allroutes />
    </div>
  );
}

export default App;
