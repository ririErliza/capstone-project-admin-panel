import React from 'react';
import Logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (

    <div >
            <div >
                <img
                src={Logo}
                width="120"
                height="50"
                className="d-inline-block align-top ml-3"
                alt="reviver logo"
                />
            </div>
            <div >
            <Link to="/donors" >Donors List</Link>
            <Link to="/volunteers" >Volunteers List</Link>
            <Link to="/dropPoints" >Drop Points</Link>
            <Link to="/"> Logout</Link>
            </div>
        </div>
    
  )
}

export default Sidebar