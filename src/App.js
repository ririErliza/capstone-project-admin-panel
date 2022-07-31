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
import AddDroppoint from './pages/AddDroppoint/AddDroppoint';
import VolunteerDetails from './pages/VolunteerDetails/VolunteerDetails';
import DonorDetails from './pages/DonorDetails/DonorDetails';
import DroppointDetails from './pages/DroppointDetails/DroppointDetails';
import AddProduct from './pages/AddProduct/AddProduct';
import Products from './pages/Products/Products';
import Orders from './pages/Orders/Orders';
import OrderDetails from './pages/OrderDetails/OrderDetails';
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
          {user && <Route path="/donors/:id" element={<DonorDetails />}/> }
          {user && <Route path="/volunteers" element={<VolunteerList />}  />}
          {user && <Route path="/volunteers/:id" element={<VolunteerDetails />}  />}
          {user && <Route path="/droppoints" element={<DropPoints />}   />}
          {user && <Route path="/droppoints/:id" element={<DroppointDetails/>}   />}
          {user && <Route path="/droppoints/add" element={<AddDroppoint />}   />}
          {user &&<Route path="/products" element={<Products />}    />}
          {user &&<Route path="/products/add" element={<AddProduct/>}    />}
          {user &&<Route path="/orders" element={<Orders />}    />}
          {user && <Route path="/orders/:id" element={<OrderDetails/>}   />}
          <Route path="*" element={<NotFound />}  />
        </Routes>

      
  );
}

export default App;
