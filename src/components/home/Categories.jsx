import { Container, Stack, Typography } from '@mui/material';
import CategoryCard from '../common/CategoryCard';

const Categories = () => {
    const categories = [
        {
            title: 'Deportivo'
        },
        {
            title: 'Casual'
        },
        {
            title: 'Elegante'
        },
        {
            title: 'Moderno'
        }
    ];
    return (
        <Container component='section'>
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
                direction='row'
                spacing={2}
                justifyContent='center'
                sx={{
                    flexWrap: {
                        xs: 'wrap',
                        md: 'nowrap'
                    }
                }}>
                {categories.map((cat) => (
                    <CategoryCard key={cat.title} title={cat.title} />
                ))}
            </Stack>
        </Container>
    );
};

export default Categories;
