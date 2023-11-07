import React, { useEffect, useState } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Divider from '@mui/material/Divider';
import CustomCard from './CustomCard';

function CustomSwiper() {
    const [data, setData] = useState([]);
    const isMobile = useMediaQuery('(max-width: 600px)'); 

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

    const CustomNavigation = ({ direction, onClick }) => (
        <IconButton onClick={onClick} sx={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
            {direction === 'prev' ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
        </IconButton>
    );

    return (
        <Box>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={isMobile ? 1 : 4} 
                navigation={{
                    prevEl: '.custom-prev-button',
                    nextEl: '.custom-next-button',
                }}
                autoplay={{ delay: 1000 }}
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <CustomCard data={item} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <Divider sx={{ my: 5, background: '#000' }} />
        </Box>
    );
}

export default CustomSwiper;
