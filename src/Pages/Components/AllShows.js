import { Box, Grid, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomCard from './CustomCard';
import Navbar from './Navabr';

function AllShows() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=spiderman")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setData(data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Box>
            <Navbar />
            <Box sx={{ px: 10, py: 5 }}>
                <Typography className='sans black' sx={{ fontSize: { md: '36px', xs: '24px' }, fontWeight: '700', pb: 3 }}> All Featured Shows</Typography>
                <Grid container spacing={2}>
                    {
                        data.map((item, index) => (

                            <Grid key={index} item md={3} sx={{ py: 3 }}>
                                <CustomCard data={item} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default AllShows