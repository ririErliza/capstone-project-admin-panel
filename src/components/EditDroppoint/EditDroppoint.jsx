import {Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import "./EditDroppoint.scss";


const EditDroppoint = ({props, data}) => {
    const [values, setValues] = useState({
        name:data.name,
        phone: data.phone,
        city: data.city,
        zipCode: data.zipCode,

        
      });
    
      console.log(values)

        const apiUrl = 'https://reviver-backend.herokuapp.com'
        const token = localStorage.getItem('token')

        const authAxios = axios.create({
            baseURL:apiUrl,
            headers: {Authorization :`Bearer ${token}`}
        })
            


    
      const handleSubmit = (e) =>{
    
        e.preventDefault();
        authAxios.put(`${apiUrl}/droppoints/`+ props,{
            name:values.name,
            phone: values.phone,
            city: values.city,
        	zipCode: values.zipCode,
        })
        .then((res)=>{
            console.log(res.message);
            alert("Data successfully UPDATED");
			window.location.reload();
           
        })
        .catch(err=>console.error(err))
      }
  return (

    <Paper elevation={2} sx={{ padding: 2 }} style={{ height:"320px" }}>
		
		<Typography variant="h5">
			Edit Data
		</Typography>
		<form onSubmit={handleSubmit}>
			<Grid container direction="column" spacing={2}
					style={{ fontSize:"10px" }}>
				<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Name"
							placeholder={data.name}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, name:e.target.value})}
						/>
				</Grid>
				
                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Phone number"
							placeholder={data.phone}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, phone:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="City"
							placeholder={data.city}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, city:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Zip Code"
							placeholder={data.zipCode}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, zipCode:e.target.value})}
						/>
				</Grid>

                

                <Grid item>
					<Button type="submit" fullWidth variant="outlined" color="success">
						UPDATE
					</Button>
                </Grid>

					

					
			</Grid>
		</form>
	
        

	</Paper>
    
        
  )
}

export default EditDroppoint