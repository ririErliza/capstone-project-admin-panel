import {Button, Grid, Paper, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import "./EditDonor.scss";


const EditDonor = ({props, data}) => {
    const [values, setValues] = useState({
        name:data.name,
        surname:data.surname,
        email:data.email,
        phone: data.phone,
        amount: data.numberOfShoes,
        droppoint: data.dropPoints,

        
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
        authAxios.put(`${apiUrl}/donors/`+ props,{
            name:values.name,
            surname:values.surname,
            email:values.email,
            phone: values.phone,
            numberOfShoes: values.amount,
            dropPoints: values.droppoint,
        })
        .then((res)=>{
            console.log(res.message);
            alert("Data successfully UPDATED")
           
        })
        .catch(err=>console.error(err))
      }
  return (

    <Paper elevation={2} sx={{ padding: 2 }}>
		
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
							label="Enter your first name"
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
							label="Enter your last name"
							placeholder={data.surname}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, surname:e.target.value})}
						/>
				</Grid>
				<Grid item>
						<TextField
							type="email"
							fullWidth
							label="Enter your email"
							placeholder={data.email}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, email:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Enter your phone"
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
							label="Enter your choice of job"
							placeholder={data.numberOfShoes}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, amount:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Enter your choice of location"
							placeholder={data.dropPoints}
							variant="standard"
							size="small"
							color="success"
							onChange={(e)=>setValues({...values, droppoint:e.target.value})}
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

export default EditDonor