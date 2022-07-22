import {Button, FormControlLabel, Grid,Paper,Radio,RadioGroup,TextField, Typography } from '@mui/material'
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
		status: data.status,

        
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
        authAxios.put(`${apiUrl}/donors/`+ props,{
            name:values.name,
            surname:values.surname,
            email:values.email,
            phone: values.phone,
            numberOfShoes: values.amount,
            dropPoints: values.droppoint,
			status: values.status,
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

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Phone number"
							placeholder={data.phone}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, phone:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Amount of shoes"
							placeholder={data.numberOfShoes}
							variant="standard"
							size="small"
							
							onChange={(e)=>setValues({...values, amount:e.target.value})}
						/>
				</Grid>

                <Grid item>
						<TextField
							type="string"
							fullWidth
							label="Drop Point"
							placeholder={data.dropPoints}
							variant="standard"
							size="small"
					
							onChange={(e)=>setValues({...values, droppoint:e.target.value})}
						/>
				</Grid>


				<Grid item >
				<RadioGroup id='radiogroup' onChange={(e)=>setValues({...values, status:e.target.value})}>
					
					<FormControlLabel value="Incoming" control={<Radio/>} label = "Incoming"/>
					<FormControlLabel value="On progress" control={<Radio/>} label = "On progress"/>
					<FormControlLabel value="Completed" control={<Radio/>} label = "Completed"/>
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

export default EditDonor