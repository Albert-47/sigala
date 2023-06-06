import ProductCard from '@/components/common/ProductCard';
import { client } from '../../../sanity/lib/client';
import Filters from './components/Filters';
import { createContext, useState } from 'react';

const { Container, Grid } = require('@mui/material');

export const ShoesContext = createContext();
const MenShoes = ({ shoes, categories }) => {
    const [shoesContext, setShoesContext] = useState({
        shoes,
        filters: {}
    });

    return (
        <>
            <ShoesContext.Provider value={[shoesContext, setShoesContext]}>
                <Grid mt={2} container spacing={2} sx={{ my: 0 }}>
                    <Grid item xs={12} md={2} sx={{ py: '0px !important' }}>
                        <Filters categories={categories} />
                    </Grid>
                    <Container>
                        <Grid
                            sx={{
                                overflowY: 'auto'
                            }}
                            container
                            my={2}
                            item
                            xs={12}
                            md={10}
                            spacing={2}
                            mr={0}>
                            {shoesContext.shoes.map((shoe) => (
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
            </ShoesContext.Provider>
        </>
    );
};

export default MenShoes;

export const getServerSideProps = async () => {
    const shoesQuery = '*[_type == "shoe"]';
    const shoes = await client.fetch(shoesQuery);

    const categoriesQuery = '*[_type == "category"]{name}';
    const categories = await client.fetch(categoriesQuery);

    return {
        props: {
            shoes,
            categories
        }
    };
};
