import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GaugeChart from 'react-gauge-chart';

const RatingGraph = () => {

    const [averageRating, setAverageRating] = useState("");

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=spiderman")
            .then((response) => response.json())
            .then((data) => {
                setAverageRating(getAverage(data))
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    function getAverage(numbersArray) {
        // Extract the numbers and calculate their sum
        const sum = numbersArray.reduce((acc, show) => acc + (show.show.rating?.average || 0), 0);

        console.log("sum", sum)
        // Calculate the average
        const average = sum / numbersArray.length;

        return average.toFixed(2);

    }

    console.log(averageRating)

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Center horizontally
                justifyContent: 'center', // Center vertically
                border: '1px solid #B7BFC8',
                py: 5,
                minHeight: '400px',
            }}
        >
            <Typography className='sans' sx={{ fontSize: '18px', fontWeight: '700', mb: 4 }}>
                Average Rating
            </Typography>
            <GaugeChart
                id="rating-speedometer-chart"
                textColor="#000"
                colors={["#ff0000", '#ffa700', '#fff400', 'a3ff00', '#2cba00']}
                arcPadding={0.02}
                percent={averageRating}
                needleColor="gray"
                hideText
                nrOfLevels={100}
                arcWidth={0.5}
                sx={{
                    width: '350px',
                    '@media (max-width: 600px)': {
                        width: '250px', // Adjust width for mobile view
                    },
                }}
            />
            <Typography className='poppins' sx={{ fontWeight: '700', fontSize: '28px' }}>{averageRating}</Typography>
        </Box>
    );
};

export default RatingGraph;
