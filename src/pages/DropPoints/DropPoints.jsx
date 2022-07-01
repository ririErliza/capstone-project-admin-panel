import React from 'react';
import DroppointTable from '../../components/DroppointTable/DroppointTable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./DropPoints.scss"

const DropPoints = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
    <Navbar/>
   
    <DroppointTable/>
    
  </div>
  </div>
  )
}

export default DropPoints