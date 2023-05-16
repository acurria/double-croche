import { defineType } from "sanity";

export default defineType({
    name: 'subcategories',
    title: 'Sous-Catégories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre de la sous-catégorie',
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