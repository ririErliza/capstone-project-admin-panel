import React from 'react';
import DroppointTable from '../../components/DroppointTable/DroppointTable';
//import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./DropPoints.scss"
import AddIcon from '@mui/icons-material/Add';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DropPoints = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
    {/* <Navbar/> */}
    <div className='title'>
    <Typography variant="h5">Drop Points</Typography>
    <Link to="/dropPoints/add" style={{ textDecoration: "none" }}>
      <Button id="button-plus"> <AddIcon className='icon'/> </Button>
    </Link>
    </div>

    <DroppointTable/>
    
  </div>
  </div>
  )
}

export default DropPoints