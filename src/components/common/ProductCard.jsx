import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import { urlForImage } from '../../../sanity/lib/image';

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
                    image={urlForImage(product.image.asset._ref)}
                    alt='green iguana'
                />
                <CardContent>
                    <Typography variant='caption' color='black' mb={5}>
                        $200
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                        {product.name}
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
