import {Button, FormControlLabel, Grid, Paper, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react';
import "./EditProduct.scss";


const EditProduct = ({props, data}) => {
    const [values, setValues] = useState({
        title:data.title,
		desc: data.desc,
		color:data.color,
        price: data.price,
        inStock: data.inStock,
          
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
        authAxios.put(`${apiUrl}/products/`+ props,{

           
			title:values.title,
            desc:values.desc,
            color:values.color,
			price: values.price,
			inStock: values.inStock,
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
							label="Title"
							placeholder={data.title}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, title:e.target.value})}
						/>
				</Grid>
				<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Description"
							placeholder={data.desc}
							variant="standard"
							size="small"
					
							onChange={(e)=>setValues({...values, desc:e.target.value})}
						/>
				</Grid>
				<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Color"
							placeholder={data.color}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, color:e.target.value})}
						/>
				</Grid>

				<Grid item>
						<TextField
							type="number"
							fullWidth
							label="Price"
							placeholder={data.price}
							variant="standard"
							size="small"
						
							onChange={(e)=>setValues({...values, price:e.target.value})}
						/>
				</Grid>

                


			

				<Grid item >
				<RadioGroup id='radiogroup' onChange={(e)=>setValues({...values, inStock:e.target.value})}>
					
					<FormControlLabel value="true" control={<Radio/>} label = "true"/>
					<FormControlLabel value="false" control={<Radio/>} label = "false"/>
		
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

export default EditProduct