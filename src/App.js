
import './App.css';
import Homepage from './components/Homepage';
import Homepage2 from './components/Homepage2';
import Navbar from "./components/Navbar"
import Login from "./Pages/Login"
import Create from "./Pages/Create"
import DetailPage from "./Pages/DetailPage"
import VideoPage from "./Pages/VideoPage"
import { Routes,Route} from "react-router-dom";
import Paymentspage from './Pages/Paymentspage';
import { Store } from './Pages/Store';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/HomePage2" element={<Homepage2/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Create" element={<Create/>}></Route>
      <Route path="/PaymentPage" element={<Paymentspage/>}></Route>
      <Route path="/DetailsPage" element={<DetailPage/>}></Route>
      <Route path="/VideoPage" element={<VideoPage/>}></Route>
      <Route path="/store" element={<Store/>}></Route>
        
     </Routes>
     <Footer />
    </div>
  );
}

export default App;
