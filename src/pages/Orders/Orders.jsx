import {Typography } from '@mui/material'
import React from 'react'
import OrderTable from '../../components/OrderTable/OrderTable'
//import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import "./Orders.css"

const Orders = () => {
  return (
    <div className="list">
    <Sidebar/>
  
  <div className='listContainer'>
   

<div className='title'>

<Typography variant="h5">Orders</Typography>
</div>

    <OrderTable/>
 


   
    
    
  </div>
  </div>
  
  )
}

export default Orders