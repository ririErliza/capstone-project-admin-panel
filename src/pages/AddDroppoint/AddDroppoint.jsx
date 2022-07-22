import React, { useState } from 'react';
import "./AddDroppoint.scss";
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
	LinearProgress,
	Fade,
  Box,
} from "@mui/material";
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const AddDroppoint = () => {

  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
	  name:"",
	  phone:"",
    city: "",
    zipCode: "",

  });

  console.log(values)
  const navigate = useNavigate();

  const apiUrl = 'https://backend-reviver.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })

  const handleSubmit = (e) =>{
	setLoading(true)
	e.preventDefault();
	authAxios
	.post(`${apiUrl}/droppoints/`,
  
  {
		name:values.name,
		phone:values.phone,
		city:values.city,
		zipCode:values.zipCode,
	})
	.then((res)=>{
		console.log(res.message);
		alert("successfully Added!")
		navigate("/droppoints")

	})
	.catch(err=>console.error(err))
  }
  
  
  
  return (

    <div className="list">
      <Sidebar/>
    
      <div className='listContainer'>
        <Navbar/>
       
        <Box id="droppoint-bg">
 
			<Container maxWidth="sm">
				<Grid
					container
					spacing={2}
					direction="column"
					justifyContent="center"
					style={{ minHeight: "60vh" }}
				>
				<Paper elevation={2} sx={{ padding: 3 }}>
					<Typography>
					<h2>Create New Drop Point</h2>

					</Typography>
				<form onSubmit={handleSubmit}>
				<Grid container direction="column" spacing={2}>
				<Grid item>
						<TextField
              
							type="string"
              
							fullWidth
							label="Drop Point Name"
							placeholder="type here..."
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, name:e.target.value})}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="string"
              
							fullWidth
							label="Phone number"
							placeholder="type here..."
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, phone:e.target.value})}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="string"
              
							fullWidth
							label="City"
							placeholder="type here..."
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, city:e.target.value})}
						/>
					</Grid>

					<Grid item>
					<TextField
						type="string"
            
						fullWidth
						label="Zip Code"
						placeholder="type here..."
						variant="outlined"
						required
            onChange={(e)=>setValues({...values, zipCode:e.target.value})}
					/>
					</Grid>

					<Grid item>
					<Button id="button-green" type="submit" fullWidth variant="outlined">
						Add
					</Button>
					</Grid>
				
				</Grid>
				</form>
				{loading && (
        
        <Fade
          in={loading}
          style={{
            transitionDelay: loading ? '800ms' : '0ms',
          }}
          unmountOnExit
        >
          <LinearProgress color="inherit" className='add-dp-prog'/>
        </Fade>
      )}
				</Paper>
				</Grid>
			</Container>
    </Box>

    </div>
  </div>
		
  )
}

export default AddDroppoint