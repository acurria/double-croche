import { defineType } from "sanity";

export default defineType({
    name: 'banner',
    title: "Bannière page d'accueil",
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Titre de la bannière",
            type: 'string',
            initialValue: 'Bannière active'
        },
        {
            name: 'article',
            title: 'Article',
            type: 'reference',
            to: [{type: 'articles'}],
            validation: Rule => Rule.required()      
        },
        {
            name: 'mobileImage',
            title: "Image bannière version mobile",
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'mobileDesktop',
            title: "Image bannière version desktop",
            type: 'image',
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            media: 'mobileDesktop',
            title: 'title'
        }
    }
});