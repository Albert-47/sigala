import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

export default function ProductCard({ product }) {
    return (
        <Card
            sx={{
                maxWidth: 345,
                transition: 'border 5s linear',
                backgroundColor: '#ebeff1',
                '&:hover': {
                    border: '1px solid black'
                }
            }}>
            <CardActionArea>
                <CardMedia
                    component='img'
                    height='200'
                    image='https://cdn.shopify.com/s/files/1/0323/7006/5547/products/OP100190M-4_1024x1024.jpg?v=1661264203'
                    alt='green iguana'
                />
                <CardContent>
                    <Typography variant='caption' color='black' mb={5}>
                        $200
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                        Lizard
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Womens running
                    </Typography>
                    <Typography variant='caption' color='black'>
                        New
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
