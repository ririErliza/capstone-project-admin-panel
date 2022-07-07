import { Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import DonorList from './pages/DonorList/DonorList';
import DropPoints from './pages/DropPoints/DropPoints';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound/NotFound';
import VolunteerList from './pages/VolunteerList/VolunteerList';
//import Sidebar from './components/Sidebar/Sidebar';
//import Navbar from './components/Navbar/Navbar';


function App() {
  const user = localStorage.getItem("token");
  return (

        <Routes>
          {user && <Route path="/" exact element={<Home/>} />}
          <Route path="/login" exact element={<Login />}  />
            <Route path="/" exact element={<Navigate replace to="/login" />} />
          <Route path="/register" exact element={<Register />}  />
          <Route path="/logout" element={<Logout />}  />
         
          {user && <Route path="/donors" element={<DonorList />}/> }
          {user && <Route path="/volunteers" element={<VolunteerList />}  />}
          {user && <Route path="/dropPoints" element={<DropPoints />}   />}
          <Route path="*" element={<NotFound />}  />
        </Routes>

      
  );
}

export default App;
