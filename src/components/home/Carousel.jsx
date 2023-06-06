import { Container } from '@mui/system';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from '../common/ProductCard';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Typography } from '@mui/material';
import styles from '@/styles/carousel.module.css';

const CarouselComponent = ({ products }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Container maxWidth='xl' component='section' sx={{ my: '5rem' }}>
            <Box
                component='div'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 15,
                    mb: 7,
                    alignItems: 'end'
                }}>
                <div>
                    <KeyboardDoubleArrowRightIcon
                        sx={{ fontSize: '3rem', mb: '-0.8rem' }}
                    />
                    <Typography
                        variant='h4'
                        sx={{
                            fontWeight: '600',
                            mx: '2rem',
                            display: 'inline-block',
                            alignSelf: 'start'
                        }}>
                        Nuevos Productos
                    </Typography>
                </div>
                <Typography
                    component='span'
                    variant='overline'
                    sx={{
                        '&:hover': {
                            borderBottom: '2px solid black',
                            cursor: 'pointer'
                        }
                    }}>
                    Ver todos
                </Typography>
            </Box>
            <Carousel
                containerClass={styles.carouselContainer}
                responsive={responsive}
                style={{ justifyContent: 'center' }}>
                {products.map((p) => (
                    <ProductCard key={p.name} product={p} />
                ))}
            </Carousel>
        </Container>
    );
};

export default CarouselComponent;
