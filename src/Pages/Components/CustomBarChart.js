import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const CustomBarChart = () => {
    const [showCount, setShowCount] = useState([]);

    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=spiderman")
            .then((response) => response.json())
            .then((data) => {
                const showsByDay = {};
                data?.forEach((show) => {
                    show.show.schedule.days.forEach((day) => {
                        if (!showsByDay[day]) {
                            showsByDay[day] = [];
                        }
                        showsByDay[day].push(show.show.name);
                    });
                });

                const allDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                const dayCounts = allDays.map((day) => ({
                    day,
                    count: showsByDay[day] ? showsByDay[day].length : 0,
                }));

                setShowCount(dayCounts)

            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <Box sx={{ border: '1px solid #B7BFC8', pt: 5, minHeight: '400px', px: 5 }}>
            <Typography className="sans" sx={{ fontSize: '18px', fontWeight: '700', mb: 4 }}>
                Schedule Breakdown
            </Typography>
            {showCount.map((day, index) => (
                <Box key={index} sx={{ py: 1 }}>
                    <Typography className="roboto" sx={{ fontSize: '12px', fontWeight: '700' }}>
                        {day.day}
                    </Typography>
                    <LinearProgress
                        title={day.count}
                        variant="determinate"
                        value={day?.count * 10}
                        sx={{
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#FDCA40',
                            },
                            background: '#E4EAF0',
                            height: '6px',
                        }}
                    />
                </Box>
            ))}
        </Box>
    );
};

export default CustomBarChart;
