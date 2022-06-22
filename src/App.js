import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import DonorList from './pages/DonorList';
import DropPoints from './pages/DropPoints';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import VolunteerList from './pages/VolunteerList';


function App() {
  return (
    
      <Router>

      <Sidebar />


        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/donors" element={<DonorList />}/>
          <Route path="/volunteers" element={<VolunteerList />}  />
          <Route path="/dropPoints" element={<DropPoints />}   />

          <Route path="*" element={<NotFound />}  />
        </Routes>
      </Router>
  

  );
}

export default App;
