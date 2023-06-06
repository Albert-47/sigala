const shoe = {
    name: 'shoe',
    type: 'document',
    title: 'Zapatos',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image'
        },
        {
            name: 'gender',
            title: 'Género',
            type: 'number',
            options: {
                list: [
                    { title: 'Masculino', value: 0 },
                    { title: 'Femenino', value: 1 }
                ]
            }
        },
        {
            name: 'kids',
            title: 'Para niños',
            type: 'boolean',
            initialValue: 'false'
        },
        {
            name: 'categories',
            title: 'Categorías a las que pertenece el zapato',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'category' }]
                }
            ]
        }
    ]
};

export default shoe;
