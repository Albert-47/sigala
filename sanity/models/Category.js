const category = {
    name: 'category',
    type: 'document',
    title: 'Categorías',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Nombre de la categoría'
        },
        {
            name: 'shoes',
            title: 'Zapatos de la categoría',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'shoe' }]
                }
            ]
        }
    ]
};

export default category;
