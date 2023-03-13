import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import CategoryCard from '../common/CategoryCard';

const Categories = () => {
    return (
        <Container maxWidth='xl' component='section'>
            <Typography
                variant='h4'
                textAlign='center'
                sx={{
                    fontWeight: '600',
                    my: '5rem'
                }}>
                Categorías
            </Typography>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={3}
                justifyContent='center'>
                {['Zapatos', 'Carteras', 'Más Vendidos', 'Nueva Mercancía'].map(
                    (item) => (
                        <CategoryCard key={`${item}cat`} title={item} />
                    )
                )}
            </Stack>
        </Container>
    );
};

export default Categories;
