import { defineType } from "sanity";

export default defineType({
    name: 'albums',
    title: 'Albums',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Titre',
            type: 'string'
        }
    ]
});