import { defineType } from "sanity";

export default defineType({
    name: 'events',
    title: 'Évènements',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Nom de l'évènement",
            type: 'string'       
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        },
        {
            name: 'type',
            title: 'Type',
            type: 'reference',
            to: [{type: 'eventTypes'}]        
        },
        {
            name: 'month',
            title: 'Month',
            type: 'string'        
        },
        {
            name: 'date',
            title: 'Date',
            type: 'date'        
        }
    ]
});