/* eslint-disable @next/next/no-img-element */
import { Box, Typography } from '@mui/material';

const CategoryCard = ({ title }) => {
    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                component='img'
                src='https://ae01.alicdn.com/kf/Sf304b0bf84eb4710aeda3792fd7924a8E/Dry-Fit-Men-s-Training-Sportswear-Set-Gym-Fitness-Compression-Sport-Suit-Jogging-Tight-Sports-Wear.jpg_Q90.jpg_.webp'
                alt='siuu'
                sx={{ width: { sm: '19vw', xs: '90vw' } }}
            />
            <Typography gutterBottom variant='h5' component='div'>
                {title}
            </Typography>
            <Typography variant='caption' mb={2} display='block'>
                Sample description text for the category
            </Typography>
            <Typography
                variant='button'
                textAlign='center'
                sx={{
                    mx: 'auto',
                    fontSize: 'bold',
                    borderBottom: '2px solid black',
                    '&:hover': {
                        bgcolor: ' black',
                        color: 'white',
                        cursor: 'pointer'
                    }
                }}>
                Ver ahora
            </Typography>
        </Box>
    );
};

export default CategoryCard;
