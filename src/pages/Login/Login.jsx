import React, { useState } from 'react';
import "./Login.scss";
import {
	Container,
	Fade,
	LinearProgress,
	Button,
	Grid,
	Paper,
	TextField,
	IconButton,
	InputAdornment,
	Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from 'axios';
import { Link } from "react-router-dom";


const Login = () => {
	const [loading, setLoading] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
    showPass: false,
  });

  console.log(values) 

  const handleSubmit = (e) =>{
	setLoading(true)
	e.preventDefault();
	axios
	.post("https://backend-reviver.herokuapp.com/users/login",{
		email:values.email,
		password:values.password,
	})
	.then((res)=>{
		localStorage.setItem("token", res.data.accessToken);
		setLoading(true);
		window.location="/";
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
<Typography className='title'>
	<h2>Login to Your Account</h2>

</Typography>
<form onSubmit={handleSubmit}>
<Grid container direction="column" spacing={2}>

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
		Login
	</Button>
	</Grid>

	
	<Grid item>
	<h4>New Here ?</h4>
					<Link to="/register">
						<Button>
							Sign Up
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
	);
};

export default Login