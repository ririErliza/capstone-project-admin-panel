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
	Typography,
	LinearProgress,
	Fade,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
	name:"",
	surname:"",
    email: "",
    password: "",
    showPass: false,
  });

  console.log(values)
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
	setLoading(true)
	e.preventDefault();
	axios
	.post("https://reviver-backend.herokuapp.com/users/register",{
		name:values.name,
		surname:values.surname,
		email:values.email,
		password:values.password,
	})
	.then((res)=>{
		console.log(res.message);
		alert("Successfully Registered! Thank you!")
		navigate("/login")

	})
	.catch(err=>console.error(err))
  }
  
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div id="background">
			<Container maxWidth="sm">
				<Grid
					container
					spacing={2}
					direction="column"
					justifyContent="center"
					style={{ minHeight: "100vh" }}
				>
				<Paper elevation={2} sx={{ padding: 3 }}>
					<Typography>
					<h2>Create New Account</h2>

					</Typography>
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
					<Button id="button-green" type="submit" fullWidth variant="contained">
						SIGNUP
					</Button>
					</Grid>
					<Grid item>
						<h4>Already have an account ?</h4>
							<Link to="/login">
								<Button>
									Login
								</Button>
							</Link>
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
          <LinearProgress  color='inherit' className='linear-prog'/>
        </Fade>
      )}
				</Paper>
				</Grid>
			</Container>
		</div>
  )
}

export default Register