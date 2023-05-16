import { defineType } from "sanity";

export default defineType({
    name: 'musicFestivals',
    title: 'Festivals de musique',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Nom du festival',
            type: 'string'
        }
    ]
});