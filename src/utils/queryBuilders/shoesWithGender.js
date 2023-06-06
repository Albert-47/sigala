import { gender } from '@/types';
export default function shoesWithGender(filtersState) {
    let query = '';
    let i = 0;
    for (let [key, value] of Object.entries(filtersState)) {
        if (value) {
            query += `${i > 0 ? '||' : ''} gender == ${gender[key]}`;
            i++;
        }
    }
    return i > 0 ? query : 'true';
}
