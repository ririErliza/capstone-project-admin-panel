import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar'
import "./Products.css"
import AddIcon from '@mui/icons-material/Add';

const Products = () => {
  return (
    <div className="list">
      <Sidebar/>
    
      <div className='listContainer'>
     
       

        <div className='title'>
    <Typography variant="h5">Products</Typography>
    <Link to="/products/add" style={{ textDecoration: "none" }}>
      <Button id="button-plus"> <AddIcon className='icon'/> </Button>
    </Link>
    </div>
      
  

    

            
        
      </div>
    </div>
  )
}

export default Products