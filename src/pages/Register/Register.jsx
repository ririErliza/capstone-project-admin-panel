import React, { useState } from 'react';
import "./Register.scss";
import {
	Container,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from 'axios';

const Register = () => {
  const [values, setValues] = useState({
	name:"",
	surname:"",
    email: "",
    password: "",
    showPass: false,
  });

  console.log(values)

  const handleSubmit = (e) =>{
	e.preventDefault();
	axios
	.post("https://reviver-backend.herokuapp.com/users/register",{
		name:values.name,
		surname:values.surname,
		email:values.email,
		password:values.password,
	})
	.then(res=>console.log(res))
	.catch(err=>console.error(err))
  }
  
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
			<Container maxWidth="sm">
				<Grid
					container
					spacing={2}
					direction="column"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
				>
				<Paper elelvation={2} sx={{ padding: 5 }}>
				<form onSubmit={handleSubmit}>
				<Grid container direction="column" spacing={2}>
				<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Enter your first name"
							placeholder="Your First Name"
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, name:e.target.value})}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="string"
							fullWidth
							label="Enter your last name"
							placeholder="Your Last Name"
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, surname:e.target.value})}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="email"
							fullWidth
							label="Enter your email"
							placeholder="Email Address"
							variant="outlined"
							required
							onChange={(e)=>setValues({...values, email:e.target.value})}
						/>
					</Grid>

					<Grid item>
					<TextField
						type={values.showPass ? "text" : "password"}
						fullWidth
						label="Password"
						placeholder="Password"
						variant="outlined"
						required
						onChange={(e)=>setValues({...values, password:e.target.value})}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<IconButton
										onClick={handlePassVisibilty}
										aria-label="toggle password"
										edge="end"
									>
										{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
									</IconButton>
								</InputAdornment>
							),
						}}
					/>
					</Grid>

					<Grid item>
					<Button type="submit" fullWidth variant="contained">
						REGISTER
					</Button>
					</Grid>
				</Grid>
				</form>
				</Paper>
				</Grid>
			</Container>
		</div>
  )
}

export default Register