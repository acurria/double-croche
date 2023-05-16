import { defineType } from "sanity";

export default defineType({
    name: 'films',
    title: 'Films',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        }
    ]
});