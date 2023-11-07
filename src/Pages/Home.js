import React from 'react';
import CustomSwiper from './Components/CustomSwiper';
import { Box, Typography, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CustomDonutChart from './Components/CustomDonutChart';
import CustomBarChart from './Components/CustomBarChart';
import RatingGraph from './Components/RatingGraph';
import Navbar from './Components/Navabr';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <Navbar />
            <Box px={{md:10, xs:5}}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 3 }}>
                    <Typography className='sans black' sx={{ fontSize: {md:'36px', xs:'12px'}, fontWeight: '700' }}>Featured Shows</Typography>
                    <Link to="/all-shows" style={{textDecoration:'none'}} >
                        <Typography className='sans' sx={{ fontSize: {md:'18px', xs:'12px'}, fontWeight: '400', color: '#BE123C',  }}>
                            See more
                            <ArrowForwardIosIcon sx={{ fontSize: {md:'18px', xs:'12px'} }}/>
                        </Typography>

                    </Link>
                </Box>
                <CustomSwiper />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 3 }}>
                    <Typography className='sans black' sx={{ fontSize: {md:'36px', xs:'12px'}, fontWeight: '700' }}>Metrics</Typography>
                    <Typography className='sans' sx={{ fontSize: '18px', fontWeight: '400', color: '#BE123C' }}>
                        See more
                        <ArrowForwardIosIcon sx={{ fontSize: {md:'18px', xs:'12px'} }}/>
                    </Typography>
                </Box>
                <Grid container spacing={2} sx={{pb:5}}>
                    <Grid item md={3} xs={12}>
                        <RatingGraph/>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <CustomBarChart />
                    </Grid>
                    <Grid item md={3} xs={12}>
                        <CustomDonutChart />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default Home;
