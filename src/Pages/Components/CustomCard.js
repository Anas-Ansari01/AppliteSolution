import React, { useState, useEffect } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import FavoriteIcon from '@mui/icons-material/Favorite';
function CustomCard({ data }) {
    const [isLoading, setIsLoading] = useState(true);
    const [isWishlistSelected, setIsWishlistSelected] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    function getYearFromDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        return year;
    }

    const handleWishlistClick = () => {
        setIsWishlistSelected((prevIsWishlistSelected) => !prevIsWishlistSelected);
    };


    return (
        <Box position="relative" width="100%" maxWidth="320px" margin="0 auto">
            {isLoading ? (
                <React.Fragment>
                    {/* Image Skeleton */}
                    <Skeleton variant="rect" width={300} height={400} />

                    {/* Title Skeleton */}
                    <Skeleton variant="text" width={200} height={30} />

                    {/* Year Skeleton */}
                    <Skeleton variant="text" width={150} height={15} />

                    {/* Rating Skeleton */}
                    <Skeleton variant="text" width={100} height={15} />

                    {/* Genre Skeleton */}
                    <Skeleton variant="text" width={200} height={15} />
                </React.Fragment>
            ) : data ? (
                <React.Fragment>
                    {/* Wishlist Icon */}
                    <IconButton
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 20,
                            zIndex: 1,
                            color: isWishlistSelected ? 'red' : 'grey',
                            background: isWishlistSelected ? 'transparent' : '#fff',
                            opacity:0.7
                        }}
                        onClick={handleWishlistClick}
                    >
                        <FavoriteIcon sx={{fontSize:{md:'24px', xs:'12px'}}}/>
                    </IconButton>
                    {/* Image */}
                    <img src={data?.show?.image?.medium} alt="img" height={'100%'} width={'100%'} />
                    {/* Year */}
                    <Typography className="sans grey" sx={{ fontSize: '12px', fontWeight: '700', pt: 2 }}>
                        {data?.show?.network?.country?.name}, {getYearFromDate(data?.show?.premiered)}-{data?.show?.status}
                    </Typography>

                    {/* Title */}
                    <Typography className="sans black" sx={{ fontSize: '18px', fontWeight: '700' }}>
                        {data?.show?.name}
                    </Typography>



                    {/* Rating */}
                    <Typography className="sans black" sx={{ fontSize: '12px', fontWeight: '400' }}>
                        {` ${data.show?.rating?.average}`}
                    </Typography>

                    {/* Genre */}
                    <Typography className="sans grey" sx={{ fontSize: '12px', fontWeight: '700' }}>
                        {`${data?.show?.genres?.join(', ')}`}
                    </Typography>
                </React.Fragment>
            ) : null}
        </Box>
    );
}

export default CustomCard;
