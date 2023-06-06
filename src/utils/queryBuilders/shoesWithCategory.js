export default function shoesWithCategories(filtersState) {
    let query = '';
    let i = 0;
    for (let [key, value] of Object.entries(filtersState)) {
        if (value) {
            query += `${
                i > 0 ? '||' : ''
            } references(categories, *[_type == "category" && name == "${key}"][0]._id)`;
            i++;
        }
    }
    return i > 0 ? query : 'true';
}
