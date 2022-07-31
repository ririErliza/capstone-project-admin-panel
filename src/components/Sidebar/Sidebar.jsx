import React from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import "./Sidebar.scss";
import Logo from '../../images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PushPinIcon from '@mui/icons-material/PushPin';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import StoreIcon from '@mui/icons-material/Store';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import { Button } from '@mui/material';


const Sidebar = () => {
  const location = useLocation()
  const Navigate = useNavigate()
  const handleLogout =()=>{
    localStorage.removeItem("token");
    Navigate("/login")
  }
  return (

    <div className='sidebar'>
      <div className="top">
        <span className="logo"><img
                    src={Logo}
                    width="150"
                    height="auto"
                    className="image-threer"
                    alt="reviver logo"
                    /></span>


              <div className="center">
                <ul>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>
                      <DashboardIcon className='icon'/> 
                      <span >
                      Dashboard
                      </span> 
                    </li>
                  </Link>
                  <Link to="/donors" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/donors' ? 'nav-link active' : 'nav-link'}> 
                      <CardGiftcardIcon className='icon'/> 
                      <span >
                      Donor List
                      </span> 
                    </li>
                  </Link>
                  <Link to="/volunteers" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/volunteers' ? 'nav-link active' : 'nav-link'}>
                      <PersonIcon className='icon'/> 
                      <span >
                      Volunteer List
                      </span>
                    </li>
                  </Link>
                  <Link to="/dropPoints" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/dropPoints' ? 'nav-link active' : 'nav-link'}>
                      <PushPinIcon className='icon'/> 
                      <span >
                      Drop Points
                      </span> 
                      </li>
                  </Link>
                  <Link to="/products" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/products' ? 'nav-link active' : 'nav-link'}>
                      <StoreIcon className='icon'/> 
                      <span >
                      Products
                      </span> 
                      </li>
                  </Link>
                  <Link to="/orders" style={{ textDecoration: "none" }}>
                    <li className={location.pathname === '/orders' ? 'nav-link active' : 'nav-link'}>
                      <AllInboxIcon className='icon'/> 
                      <span >
                      Orders
                      </span> 
                      </li>
                  </Link>
                </ul>
              </div>
      </div>
  
  

      <div className="bottom">
        <Button onClick={handleLogout}><PowerSettingsNewIcon className='icon'/> Logout</Button> 
       
      </div>
           
    
    </div>
    
  )
}

export default Sidebar