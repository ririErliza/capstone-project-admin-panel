// import React, { useEffect, useState } from 'react'
import "./VolunteerDetails.scss"
import { Grid, Paper,Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import Sidebar from '../../components/Sidebar/Sidebar';
import EditVolunteer from "../../components/EditVolunteer/EditVolunteer";
import { Box } from "@mui/system";
//import DataVolunteer from "../../components/DataVolunteer/DataVolunteer";


const VolunteerDetails = () => {

const params= useParams();

console.log("paramsId:", params.id, "params:", params)

const [data, setData]=useState([])
  const apiUrl = 'https://backend-reviver.herokuapp.com'
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
      <div className='title'>
    <Typography variant="h5">Volunteer Details</Typography>
  
    </div>
      
       
        <Box id = "box-volunteerd">
        <Grid container spacing={2} >
      
          <Grid item xs={6} md={6}>
            <Paper elevation={2} sx={{ padding: 2 }} id="paper-data">
              
              <Typography variant="h5" id="data-text"> Volunteer Data</Typography>

                  <div id="data-details">
                    <div className="text-div">
                      <div className="title-div">Name</div>
                      <div className="details-div">{data.name}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Surname</div>
                      <div className="details-div">{data.surname}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Email</div>
                      <div className="details-div">{data.email}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Phone Number</div>
                      <div className="details-div">{data.phone}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Choice of Job</div>
                      <div className="details-div">{data.choiceOfJob}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Location</div>
                      <div className="details-div">{data.location}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Duration</div>
                      <div className="details-div">{data.duration}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Date created</div>
                      <div className="details-div">{(data.createdAt)}</div>
                    </div>
                  </div>

              
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} >
				
            <EditVolunteer data={data} props={params.id}/>
        </Grid>
            
   
          
      
      </Grid>

      </Box>

    

            
        
      </div>
    </div>

  


  )
}

export default VolunteerDetails