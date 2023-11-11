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
            title: 'Mois (Uniquement pour Albums, Films et Concerts)',
            type: 'string'
        },
        {
            name: 'year',
            title: 'Année (Uniquement pour Albums, Films et Concerts)',
            type: 'string'
        },
        {
            name: 'dateStart',
            title: 'Date de début',
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            }
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