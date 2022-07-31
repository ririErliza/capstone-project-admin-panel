
import { Typography } from '@mui/material';
import React from 'react';
//import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import VolunteerTable from '../../components/VolunteerTable/VolunteerTable';
import "./VolunteerList.scss"

const VolunteerList = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
    {/* <Navbar/> */}

<div className='title'>

<Typography variant="h5">Volunteer List</Typography>
</div>

    <VolunteerTable/>
 


   
    
    
  </div>
  </div>
  )
}

export default VolunteerList