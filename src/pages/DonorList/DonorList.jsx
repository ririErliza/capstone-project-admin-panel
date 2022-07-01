import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import DonorTable from '../../components/DonorTable/DonorTable';
import "./DonorList.scss"

const DonorList = () => {
  return (
    <div className="list">
      <Sidebar/>
    
    <div className='listContainer'>
      <Navbar/>
     
      <DonorTable/>
      
    </div>
    </div>
  )
}

export default DonorList