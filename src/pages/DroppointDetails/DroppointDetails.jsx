// import React, { useEffect, useState } from 'react'
import "./DroppointDetails.scss"
import { Grid, Paper,Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import EditDroppoint from "../../components/EditDroppoint/EditDroppoint";
import { Box } from "@mui/system";



const DroppointDetails = () => {

const params= useParams();

console.log("paramsId:", params.id, "params:", params)

const [data, setData]=useState([])
  const apiUrl = 'https://reviver-backend.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/droppoints/`+ params.id)
    .then(res=> {
      console.log("Data is", res.data)
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }, 
 // eslint-disable-next-line
  [])

  return (
    <div className="list">
      <Sidebar/>
    
      <div className='listContainer'>
        <Navbar/>
       
        <Box id = "box-droppointd">
        <Grid container spacing={2} >
      
          <Grid item xs={6} md={6}>
            <Paper elevation={2} sx={{ padding: 2 }} id="paper-data">
              
              <Typography variant="h5" id="data-text"> Drop Point Data</Typography>

                  <div id="data-details">
                    <div className="text-div">
                      <div className="title-div">Name</div>
                      <div className="details-div">{data.name}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Phone Number</div>
                      <div className="details-div">{data.phone}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">City</div>
                      <div className="details-div">{data.city}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Zip Code</div>
                      <div className="details-div">{data.zipCode}</div>
                    </div>
                  
                    <div className="text-div">
                      <div className="title-div">Date created</div>
                      <div className="details-div">{(data.createdAt)}</div>
                    </div>
                  </div>

              
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} >
				
            <EditDroppoint data={data} props={params.id}/>
        </Grid>
            
   
          
      
      </Grid>

      </Box>

    

            
        
      </div>
    </div>

  


  )
}

export default DroppointDetails