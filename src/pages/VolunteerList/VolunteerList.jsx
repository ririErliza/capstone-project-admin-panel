
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import VolunteerTable from '../../components/VolunteerTable/VolunteerTable';
import "./VolunteerList.scss"

const VolunteerList = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
    <Navbar/>

<div className='title'>
  <h2>Volunteer List</h2>
</div>

    <VolunteerTable/>
 


   
    
    
  </div>
  </div>
  )
}

export default VolunteerList