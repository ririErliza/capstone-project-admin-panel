import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (

    <div >
           
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