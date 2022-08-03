import './App.css';
import DetailPage from './pages/DetailPage';
import VideoPage from './pages/VideoPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <Routes>
         <Route path="/videoPage" element={<VideoPage/>}></Route>
         <Route path="/" element={<DetailPage/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
