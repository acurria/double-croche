import { defineType } from "sanity";

export default defineType({
    name: 'categories',
    title: 'Catégories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre de la catégorie',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }
    ]
});