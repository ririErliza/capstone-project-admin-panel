import React from 'react';
import "./Home.scss"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { Box, Grid } from '@mui/material';





const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <Box>
        <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              xs=6 md=4
            </Grid>
            <Grid item xs={6} md={4}>
            xs=6 md=4
            </Grid>
            <Grid item xs={6} md={4}>
              xs=6 md=4
            </Grid>
            <Grid item xs={6} md={8}>
              xs=6 md=8
            </Grid>
        </Grid>

        </Box>

      </div>
    </div>
  )
}

export default Home