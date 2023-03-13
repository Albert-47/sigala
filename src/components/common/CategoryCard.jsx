import { Paper, Typography } from '@mui/material';
import Image from 'next/image';

const CategoryCard = ({ title }) => {
    return (
        <Paper
            elevation={3}
            sx={{
                display: 'relative',
                width: '20rem',
                bgcolor: '#e8e7e6',
                textAlign: 'center',
                '&:hover': {
                    cursor: 'pointer'
                }
            }}>
            <Image
                src='/hoddie.webp'
                width={200}
                height={200}
                alt='category'
                style={{ display: 'block', margin: 'auto' }}
            />
            <Typography
                variant='button'
                textAlign='center'
                sx={{
                    mx: 'auto',
                    borderBottom: '2px solid black',
                    '&:hover': {
                        bgcolor: ' black',
                        color: 'white'
                    }
                }}>
                {title}
            </Typography>
        </Paper>
    );
};

export default CategoryCard;
