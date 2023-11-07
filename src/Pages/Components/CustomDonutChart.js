import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { Box, Typography } from '@mui/material';

const CustomDonutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=spiderman")
      .then((response) => response.json())
      .then((data) => {

        const allGenres = data?.flatMap((show) => show.show.genres);
        const genreCounts = allGenres.reduce((counts, genre) => {
          counts[genre] = (counts[genre] || 0) + 1;
          return counts;
        }, {});

        const sortedGenres = Object.keys(genreCounts).sort(
          (a, b) => genreCounts[b] - genreCounts[a]
        );

        const top3Genres = sortedGenres.slice(0, 5);

        const top3GenreCounts = top3Genres.map((genre) => ({
          genre,
          count: genreCounts[genre],
        }));

        const ctx = document.getElementById('myDonutChart');

        if (chartRef.current) {
          chartRef.current.destroy();
        }
    
        chartRef.current = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: top3GenreCounts?.map((item) => item.genre),
            datasets: [{
              data: top3GenreCounts?.map((item) => item.count),
              backgroundColor: ['#6610F2', '#6665DD', '#34D196', '#FF715B', '#FFA15B'],
            }]
          },
          options: {
            cutout: '60',
            responsive: true,
            plugins: {
              legend: true,
              tooltip: true,
              centerText: {
                display: true,
                text: 'Center Text',
                font: {
                  size: 16,
                  weight: 'bold',
                },
              },
            },
          }
        });

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <Box sx={{ border: '1px solid #B7BFC8', p: {md:5, xs:3}, minHeight: '400px', }}>
      <Typography className='sans' sx={{ fontSize: '18px', fontWeight: '700', mb: 4 }}>Top Genres</Typography>
      <div style={{ width: '250px', height: '250px' }}>
        <canvas id="myDonutChart"></canvas>
      </div>
    </Box>

  );
};

export default CustomDonutChart;
