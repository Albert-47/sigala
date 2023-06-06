import {
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Stack
} from '@mui/material';
import { useContext, useEffect, useState } from 'react';

import useChecksFilter from '@/utils/hooks/useChecksFilter';
import { ShoesContext } from '../shoes';
import { client } from '../../../../sanity/lib/client';
import shoesWithCategories from '@/utils/queryBuilders/shoesWithCategory';
import shoesWithGender from '@/utils/queryBuilders/shoesWithGender';
import { gender as genders } from '@/types';
import { useRouter } from 'next/router';

export default function Filters({ categories }) {
    const {
        query: { category }
    } = useRouter();

    const [context, setContext] = useContext(ShoesContext);

    const initialState = {};

    categories.forEach((category) => {
        initialState[category.name] = false;
    });

    const [filters, handleFiltersChange] = useChecksFilter(initialState);

    const [gender, handleGenderChange, setGender] = useChecksFilter({
        caballeros: false,
        damas: false
    });

    const [initialFiltering, setInitialFiltering] = useState(false); //This determines whether the filters are initialized with the params or not

    useEffect(() => {
        if (category && Object.keys(genders).includes(category)) {
            setGender({
                [category]: true
            });
        }

        setInitialFiltering(true);
    }, [category]);

    useEffect(() => {
        async function fetchData() {
            if (!initialFiltering) return;

            const query = `*[_type == "shoe" && ${shoesWithCategories(
                filters
            )} && (${shoesWithGender(gender)})]`;
            console.log(query);
            const shoes = await client.fetch(query);
            setContext({
                shoes,
                filters
            });
            console.log(context);
        }

        fetchData();
    }, [filters, gender, category]);

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
                                checked={gender.caballeros}
                                name='caballeros'
                                onChange={handleGenderChange}
                            />
                        }
                        label='Caballeros'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='damas'
                                checked={gender.damas}
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
