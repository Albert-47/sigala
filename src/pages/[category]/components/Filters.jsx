import {
    Checkbox,
    Container,
    Divider,
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
import shoesForKids from '@/utils/queryBuilders/shoesForKids';

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

    const [kids, setKids] = useState(false);

    const [gender, handleGenderChange, setGender] = useChecksFilter({
        caballeros: false,
        damas: false
    });

    const [initialFiltering, setInitialFiltering] = useState(false); //This determines whether the filters are initialized with the params or not

    useEffect(() => {
        //Filter initialization

        if (!initialFiltering) {
            //Gender filter

            if (category && Object.keys(genders).includes(category)) {
                setGender({
                    ...gender,
                    [category]: true
                });
            }

            //Kids filter

            if (category == 'niños') {
                setKids(true);
            }
            console.log('initial');

            setInitialFiltering(true);
        }
        async function fetchData() {
            console.log(initialFiltering);
            const query = `*[_type == "shoe" && ${shoesWithCategories(
                filters
            )} ${gender && '&& ' + shoesWithGender(gender)} ${
                kids ? '&& ' + shoesForKids(kids) : ''
            }]`;
            console.log(query);
            const shoes = await client.fetch(query);
            setContext({
                shoes: shoes,
                filters
            });
            console.log(shoes);
        }

        fetchData();
    }, [filters, gender, kids, category]);

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
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='kids'
                                checked={kids}
                                onChange={() => setKids(!kids)}
                            />
                        }
                        label='Niños'
                    />
                </FormGroup>

                <Divider sx={{ mt: 2 }} />

                <h2>Categoría</h2>

                <FormGroup>
                    {categories.map((category) => (
                        <FormControlLabel
                            key={`filter-${category._id}`}
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
