import { defineType } from "sanity";

export default defineType({
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        },
        {
            name: 'content',
            title: 'Description', 
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
});