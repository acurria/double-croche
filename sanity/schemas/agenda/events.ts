import { defineType } from "sanity";

export default defineType({
    name: 'events',
    title: 'Évènements',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Nom de l'évènement",
            type: 'string',
            validation: Rule => Rule.required()      
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title'
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'type',
            title: 'Type de l\'évènement',
            type: 'reference',
            to: [{type: 'eventTypes'}],
            validation: Rule => Rule.required()       
        },
        {
            name: 'month',
            title: 'Mois',
            type: 'string',
            validation: Rule => Rule.required()      
        },
        {
            name: 'dateStart',
            title: 'Date de début',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            },
            validation: Rule => Rule.required()     
        },
        {
            name: 'dateEnd',
            title: 'Date de fin',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            }
        }
    ]
});