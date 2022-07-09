// import React, { useEffect, useState } from 'react'
import "./VolunteerDetails.scss"
import { Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import EditVolunteer from "../../components/EditVolunteer/EditVolunteer";
//import DataVolunteer from "../../components/DataVolunteer/DataVolunteer";


const VolunteerDetails = () => {

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
    authAxios.get(`${apiUrl}/volunteers/`+ params.id)
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

        <Grid container 
        spacing={2} 
        direction="column"
        justifyContent="center"
        style={{ maxHeight: "60vh", maxWidth:"90%", marginTop:"80px", marginLeft:"50px" }}>
      
          <Grid item xs={6} md={6}>
            <Paper elevation={2} sx={{ padding: 2 }} id="paper-data">
              <Grid>
              <Typography variant="h5"> Volunteer Data</Typography>
                        
                    <TextField
                      type="string"
                      fullWidth
                      label="Name"
                      value={data.name}
                      variant="filled"
                    />
                  
               
                    <TextField
                      type="string"
                      fullWidth
                      label="Surname"
                      value={data.surname}
                      variant="filled"
                    />
               
                
                    <TextField
                      type="email"
                      fullWidth
                      label="Email"
                      value={data.email}
                      variant="filled"
                    />
                
                
                    <TextField
                      type="string"
                      fullWidth
                      label="Phone"
                      value={data.phone}
                      variant="filled"
                    />
                 
              
                    <TextField
                      type="string"
                      fullWidth
                      label="Choice of Job"
                      value={data.choiceOfJob}
                      variant="filled"
                    />
                  
                    <TextField
                      type="string"
                      fullWidth
                      label="Location"
                      value={data.location}
                      variant="filled"
                    />
                  
                    <TextField
                      type="string"
                      fullWidth
                      label="Duration"
                      value={data.duration}
                      variant="filled"
                    />
               
               </Grid>
          </Paper>
        </Grid>

        <Grid item xs={6} md={6}>
            <EditVolunteer data={data} props={params.id}/>
        </Grid>
            
   
          
      
      </Grid>

    

            
        
      </div>
    </div>

  


  )
}

export default VolunteerDetails