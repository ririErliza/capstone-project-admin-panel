import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import DonorList from './pages/DonorList/DonorList';
import DropPoints from './pages/DropPoints/DropPoints';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import VolunteerList from './pages/VolunteerList/VolunteerList';


function App() {
  return (
    
      <Router>

      <Sidebar />


        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}  />
          <Route path="/logout" element={<Logout />}  />
          <Route path="/register" element={<Register />}  />
          <Route path="/donors" element={<DonorList />}/>
          <Route path="/volunteers" element={<VolunteerList />}  />
          <Route path="/dropPoints" element={<DropPoints />}   />
          <Route path="*" element={<NotFound />}  />
        </Routes>
      </Router>
  

  );
}

export default App;
