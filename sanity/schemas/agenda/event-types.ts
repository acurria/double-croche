import { defineType } from "sanity";

export default defineType({
    name: 'eventTypes',
    title: "Type d'évènement",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Type d'évènement",
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