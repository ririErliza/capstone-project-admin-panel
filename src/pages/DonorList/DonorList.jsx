import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import TableList from '../../components/TableList/TableList';
import "./DonorList.scss"

const DonorList = () => {
  return (
    <div className="list">
      <Sidebar/>
    
    <div className='listContainer'>
      <Navbar/>
     
      <TableList/>
      
    </div>
    </div>
  )
}

export default DonorList