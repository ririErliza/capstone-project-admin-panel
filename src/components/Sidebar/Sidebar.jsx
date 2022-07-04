import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import "./Sidebar.scss";
import Logo from '../../images/logo.png'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PushPinIcon from '@mui/icons-material/PushPin';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Button } from '@mui/material';


const Sidebar = () => {

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
                    <li><DashboardIcon className='icon'/> <span>Dashboard</span> </li>
                  </Link>
                  <Link to="/donors" style={{ textDecoration: "none" }}>
                    <li> <CardGiftcardIcon className='icon'/> <span>Donor List</span> </li>
                  </Link>
                  <Link to="/volunteers" style={{ textDecoration: "none" }}>
                    <li><PersonIcon className='icon'/> <span>Volunteer List</span></li>
                  </Link>
                  <Link to="/dropPoints" style={{ textDecoration: "none" }}>
                    <li><PushPinIcon className='icon'/> <span>Drop Points</span> </li>
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