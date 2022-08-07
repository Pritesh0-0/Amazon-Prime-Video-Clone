
import './App.css';
import Homepage from './components/Homepage';
import Homepage2 from './components/Homepage2';
import Navbar from "./components/Navbar"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import { Routes,Route} from "react-router-dom";
 
import Paymentspage from './Pages/Paymentspage';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/HomePage" element={<Homepage/>}></Route>
      <Route path="/HomePage2" element={<Homepage2/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Create" element={<Create/>}></Route>
      <Route path="/PaymentPage" element={<Paymentspage/>}></Route>
        
     </Routes>
    </div>
  );
}

export default App;
