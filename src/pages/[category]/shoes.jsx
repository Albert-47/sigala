import ProductCard from '@/components/common/ProductCard';
import { client } from '../../../sanity/lib/client';
import Filters from './components/Filters';

const { Container, Box, Grid } = require('@mui/material');

const MenShoes = ({ shoes }) => {
    return (
        <>
            <Grid mt={2} container spacing={2}>
                <Grid item xs={12} md={2}>
                    <Filters />
                </Grid>
                <Container>
                    <Grid container item xs={12} md={10} spacing={2} mr={0}>
                        {shoes.map((shoe) => (
                            <Grid
                                key={shoe._id}
                                item
                                xs={12}
                                sm={6}
                                md={4}
                                lg={3}>
                                <ProductCard product={shoe} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Grid>
        </>
    );
};

export default MenShoes;

export const getServerSideProps = async () => {
    const query = '*[_type == "shoe"]';
    const shoes = await client.fetch(query);

    return {
        props: {
            shoes
        }
    };
};
