import{BrowserRouter,Routes,Route} from "react-router-dom";
import{Nav} from "./Components/Nav";
import{Home} from "./Components/Home";
import{Banking} from "./Components/Banking/Banking";
import { Cards } from "./Components/Cards/Cards";
import { Loans } from "./Components/Loans/Loans";
import{Support} from "./Components/Support";
import { Registration } from "./Components/Banking/Registration";
import { Login } from "./Components/Banking/Login";
import{Common} from "./Components/Common.css";


function App() {
  return (
    <div className="div">
 <BrowserRouter>
 <Nav/>
  <Routes>
     <Route path="/home" element={<Home/>} />
     <Route path="/banking"element={<Banking/>}/>
     <Route path="/cards" element={<Cards/>}/>
     <Route path="/lones" element={<Loans/>}/>
     <Route path="/supports" element={<Support/>}/>
     <Route path="/register" element={<Registration/>}/>
     <Route path="/login" element={<Login/>}/>
  </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
