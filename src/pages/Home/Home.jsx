import React from 'react';
import "./Home.scss"
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';
import { Box, Grid, Typography } from '@mui/material';
import Widget from '../../components/Widget/Widget';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import Chart from '../../components/Chart/Chart';
import PieChartWidget from '../../components/PieChartWidget/PieChartWidget';






const Home = () => {

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <Box id = "box-home">
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className='title'> Dashboard</Typography>
            </Grid>
            
            <Grid item xs={6} md={4}>
           <Widget text="Donations" number = "23566" icon={<CardGiftcardIcon fontSize='inherit'/>}/>
            </Grid>
            <Grid item xs={6} md={4}>
            <Widget text="Volunteers" number = "130" icon={<PersonIcon fontSize='inherit'/>}/>
            </Grid>
            <Grid item xs={6} md={4}>
            <Widget text="Droppoints" number = "8" icon={<PushPinIcon fontSize='inherit'/>}/>
            </Grid>
            <Grid item xs={6} md={7}>
              <Chart title="Last 6 Months (Recycled Shoes)" aspect={2 / 1}/>
            </Grid>
            <Grid item xs={6} md={5}>
              <PieChartWidget/>
            </Grid>
          
      
        </Grid>

        </Box>

      </div>
    </div>
  )
}

export default Home