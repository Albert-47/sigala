import {
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Stack
} from '@mui/material';
import { useContext, useEffect } from 'react';

import useChecksFilter from '@/utils/hooks/useChecksFilter';
import { ShoesContext } from '../shoes';
import { client } from '../../../../sanity/lib/client';
import shoesWithCategories from '@/utils/queryBuilders/shoesWithCategory';
import shoesWithGender from '@/utils/queryBuilders/shoesWithGender';

export default function Filters({ categories }) {
    const initialState = {};

    const [context, setContext] = useContext(ShoesContext);

    categories.forEach((category) => {
        initialState[category.name] = false;
    });

    const [filters, handleFiltersChange] = useChecksFilter({
        ...initialState,
        men: false,
        women: false
    });

    const [gender, handleGenderChange] = useChecksFilter({
        caballeros: false,
        damas: false
    });

    useEffect(() => {
        async function fetchData() {
            const query = `*[_type == "shoe" && ${shoesWithCategories(
                filters
            )} && (${shoesWithGender(gender)})]`;
            const shoes = await client.fetch(query);
            setContext({
                shoes,
                filters
            });
        }

        fetchData();
    }, [filters, gender]);

    return (
        <Container
            sx={{
                bgcolor: 'rgb(30, 121, 87)',
                minHeight: '100vh'
            }}>
            <Stack>
                <h2>Género</h2>

                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={gender.men}
                                name='men'
                                onChange={handleGenderChange}
                            />
                        }
                        label='Caballeros'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='women'
                                checked={gender.women}
                                onChange={handleGenderChange}
                            />
                        }
                        label='Damas'
                    />
                </FormGroup>

                <h2>Categoría</h2>

                <FormGroup>
                    {categories.map((category) => (
                        <FormControlLabel
                            key={category._id}
                            control={
                                <Checkbox
                                    checked={filters[category.name]}
                                    name={category.name}
                                    onChange={handleFiltersChange}
                                />
                            }
                            label={category.name}
                        />
                    ))}
                </FormGroup>
            </Stack>
        </Container>
    );
}
