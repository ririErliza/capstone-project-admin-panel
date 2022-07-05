import React from 'react';
import DroppointTable from '../../components/DroppointTable/DroppointTable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./DropPoints.scss"
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';

const DropPoints = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
    <Navbar/>
    <div className='title'>
    <Typography variant="h5">Drop Points</Typography>
      <Button id="button-plus"> <AddIcon className='icon'/> </Button>
    </div>

    <DroppointTable/>
    
  </div>
  </div>
  )
}

export default DropPoints