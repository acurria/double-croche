import { defineType } from "sanity";

export default defineType({
    name: 'filmFestivals',
    title: 'Festivals de film',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Nom du festival',
            type: 'string'
        }
    ]
});