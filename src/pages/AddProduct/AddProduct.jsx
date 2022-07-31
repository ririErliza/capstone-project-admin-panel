import { Box, Button, Container,  Grid, Paper, TextField, Typography } from '@mui/material'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import app from "../../firebase";
import "./AddProduct.css"
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

const AddProduct = () => {
  
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState("");
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
          return { ...prev, [e.target.name]: e.target.value };
        });
      };
  
      console.log(inputs)

  const handleSubmit = (e) =>{

	e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const product = { ...inputs, img: downloadURL };
            addProduct(product, dispatch);
            console.log(product)
          });
        }
      );
	
  }
  return (
    <div className="list">
      <Sidebar/>
    
      <div className='listContainer'>
       
       
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
					<h2>Create New Product</h2>

					</Typography>
				<form onSubmit={handleSubmit}>
				<Grid container direction="column" spacing={2}>
				<Grid item>
						<TextField
              
							type="string"
              
							fullWidth
							label="Title"
							placeholder="type here..."
							variant="outlined"
							required
                            name="title"
							onChange={handleChange}
						/>
					</Grid>
          <Grid item>
						<TextField
              
							type="string"
              
							fullWidth
							label="Id"
							placeholder="type here..."
							variant="outlined"
							required
                            name="id"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="string"
              
							fullWidth
							label="Description"
							placeholder="type here..."
							variant="outlined"
                            name="desc"
							onChange={handleChange}
						/>
					</Grid>
					<Grid item>
						<TextField
							type="number"
              
							fullWidth
							label="Price"
							placeholder="type here..."
							variant="outlined"
							required
                            name="price"
							onChange={handleChange}
						/>
					</Grid>
                    <Grid item>
						<TextField
							type="string"
              
							fullWidth
							label="Color"
							placeholder="type here..."
							variant="outlined"
							required
                            name="color"
							onChange={handleChange}
						/>
					</Grid>

                    <Grid item>
                   
                        
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                  
                    </Grid>
					

					<Grid item>
					<Button id="button-green" type="submit" fullWidth variant="outlined">
						Add Product
					</Button>
					</Grid>
				
				</Grid>
				</form>
				
        
      
          
                    </Paper>
                    </Grid>
                </Container>
            </Box>

        </div>
    </div>
  )
}

export default AddProduct