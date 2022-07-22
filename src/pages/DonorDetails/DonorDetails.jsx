// import React, { useEffect, useState } from 'react'
import "./DonorDetails.scss"
import { Grid, Paper,Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import EditDonor from "../../components/EditDonor/EditDonor";
import { Box } from "@mui/system";



const DonorDetails = () => {

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
    authAxios.get(`${apiUrl}/donors/`+ params.id)
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
       
        <Box id = "box-donord">
        <Grid container spacing={2} >
      
          <Grid item xs={6} md={6}>
            <Paper elevation={2} sx={{ padding: 2 }} id="paper-data">
              
              <Typography variant="h5" id="data-text"> Donor Data</Typography>

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
                      <div className="title-div">Amount(shoes)</div>
                      <div className="details-div">{data.numberOfShoes}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Location</div>
                      <div className="details-div">{data.dropPoints}</div>
                    </div>

                    <div className="text-div">
                      <div className="title-div">Status</div>
                      <div className="details-div">{data.status}</div>
                    </div>
                  
                    <div className="text-div">
                      <div className="title-div">Date created</div>
                      <div className="details-div">{(data.createdAt)}</div>
                    </div>
                  </div>

              
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} >
				
            <EditDonor data={data} props={params.id}/>
        </Grid>
            
   
          
      
      </Grid>

      </Box>

    

            
        
      </div>
    </div>

  


  )
}

export default DonorDetails