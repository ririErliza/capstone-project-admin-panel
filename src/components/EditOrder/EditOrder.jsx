import {Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import "./EditOrder.scss";


const EditOrder = ({props, data}) => {
    const [values, setValues] = useState({
        name:data.name,
		email: data.email,
		surname:data.surname,
        delivery_status: data.delivery_status,
        payment_status: data.payment_status,
        

        
      });
    
      console.log(values)

        const apiUrl = 'https://backend-reviver.herokuapp.com'
        const token = localStorage.getItem('token')

        const authAxios = axios.create({
            baseURL:apiUrl,
            headers: {Authorization :`Bearer ${token}`}
        })
            


    
      const handleSubmit = (e) =>{
    
        e.preventDefault();
        authAxios.put(`${apiUrl}/users/`+ props,{
           
			name:values.name,
            surname:values.surname,
            email:values.email,
			payment_status: values.payment_status,
			delivery_status: values.delivery_status,
        })
        .then((res)=>{
            console.log(res.message);
            alert("Data successfully UPDATED");
			window.location.reload();
           
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
							label="Name"
							placeholder={data.name}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, name:e.target.value})}
						/>
				</Grid>
				<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Surname"
							placeholder={data.surname}
							variant="standard"
							size="small"
					
							onChange={(e)=>setValues({...values, surname:e.target.value})}
						/>
				</Grid>
				<Grid item>
						<TextField
							type="email"
							fullWidth
							label="Email address"
							placeholder={data.email}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, email:e.target.value})}
						/>
				</Grid>

                


				<Grid item >
				<RadioGroup id='radiogroup' onChange={(e)=>setValues({...values, payment_status:e.target.value})}>
					
					<FormControlLabel value="Incoming" control={<Radio/>} label = "pending"/>
					<FormControlLabel value="On progress" control={<Radio/>} label = "refund"/>
					<FormControlLabel value="Completed" control={<Radio/>} label = "completed"/>
				</RadioGroup>
				</Grid>

				<Grid item >
				<RadioGroup id='radiogroup' onChange={(e)=>setValues({...values, delivery_status:e.target.value})}>
					
					<FormControlLabel value="Incoming" control={<Radio/>} label = "not delivered"/>
					<FormControlLabel value="On progress" control={<Radio/>} label = "shipped to address"/>
					<FormControlLabel value="Completed" control={<Radio/>} label = "completed"/>
				</RadioGroup>
				</Grid>
                

                <Grid item>
					<Button type="submit" fullWidth variant="outlined">
						UPDATE
					</Button>
                </Grid>

					

					
			</Grid>
		</form>
	
        

	</Paper>
    
        
  )
}

export default EditOrder