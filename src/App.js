
import './App.css';
import Homepage from './components/Homepage';
import Homepage2 from './components/Homepage2';
import Navbar from "./components/Navbar"
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <div className="App">
     <Navbar />
     <Routes>
      <Route path="/HomePage" element={<Homepage/>}></Route>
      <Route path="/HomePage2" element={<Homepage2/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
