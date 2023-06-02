import {
    Checkbox,
    Container,
    FormControlLabel,
    FormGroup,
    Stack
} from '@mui/material';
import { useEffect } from 'react';

import useChecksFilter from '@/utils/hooks/useChecksFilter';

export default function Filters() {
    const [filters, handleFiltersChange] = useChecksFilter({
        men: false,
        women: false
    });

    useEffect(() => {
        console.log(filters);
    }, [filters]);

    return (
        <Container>
            <Stack sx={{ bgcolor: '#fff' }}>
                <h2>Categorias</h2>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={filters.men}
                                name='men'
                                onChange={handleFiltersChange}
                            />
                        }
                        label='Enable dense'
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                name='women'
                                checked={filters.women}
                                onChange={handleFiltersChange}
                            />
                        }
                        label='Enable secondary text'
                    />
                </FormGroup>
            </Stack>
        </Container>
    );
}
