// import React, { useEffect, useState } from 'react'
import "./ProductDetails.scss"
import { Grid, Paper,Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { Box } from "@mui/system";
import EditProduct from "../../components/EditProduct/EditProduct";




const ProductDetails = () => {

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
    authAxios.get(`${apiUrl}/products/`+ params.id)
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
      
       
        <Box id = "box-donord">
        <Grid container spacing={2} >
      
          <Grid item xs={6} md={6}>
            <Paper elevation={2} sx={{ padding: 2 }} id="paper-data">
              
              <Typography variant="h5" id="data-text"> Order Data</Typography>

                  <div id="data-details">
                    <div className="text-div">
                      <div className="title-div">Title</div>
                      <div className="details-div">{data.title}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Description</div>
                      <div className="details-div">{data.desc}</div>
                    </div>
                    <div className="text-div">
                      <div className="title-div">Color</div>
                      <div className="details-div">{data.color}</div>
                    </div>

                    <div className="text-div">
                      <div className="title-div">Price</div>
                      <div className="details-div">$ {data.price}</div>
                    </div>
           

                    <div className="text-div">
                      <div className="title-div">In Stock</div>
                      <div className="details-div">
                        {data.inStock === true ? "true" : "false"}
                      </div>
                    </div>
                  
                    <div className="text-div">
                      <div className="title-div">Date created</div>
                      <div className="details-div">{(data.createdAt)}</div>
                    </div>
                  </div>

              
          </Paper>
        </Grid>

        <Grid item xs={6} md={6} >
				
            <EditProduct data={data} props={params.id}/>
        </Grid>
            
   
          
      
      </Grid>

      </Box>

    

            
        
      </div>
    </div>

  


  )
}

export default ProductDetails