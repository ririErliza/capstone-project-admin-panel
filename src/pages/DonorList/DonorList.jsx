import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import DonorTable from '../../components/DonorTable/DonorTable';
import "./DonorList.scss"
import { Typography } from '@mui/material';

const DonorList = () => {
  return (
    <div className="list">
      <Sidebar/>
    
      <div className='listContainer'>
       
          <div className='title'>
          <Typography variant="h5">Donor List</Typography>
    
          </div>

            <DonorTable/>
        
      </div>
    </div>
  )
}

export default DonorList