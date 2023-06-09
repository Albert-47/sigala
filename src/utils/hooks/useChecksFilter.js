import { useState } from 'react';

export default function useChecksFilter(initialState = {}) {
    const [filters, setFilters] = useState(initialState);

    function handleFiltersChange(e) {
        setFilters({
            ...filters,
            [e.target.name]: e.target.checked
        });
    }
    return [filters, handleFiltersChange, setFilters];
}
