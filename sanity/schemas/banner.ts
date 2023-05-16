import { defineType } from "sanity";

export default defineType({
    name: 'banner',
    title: "Bannière page d'accueil",
    type: 'document',
    fields: [
        {
            name: 'article',
            title: 'Article',
            type: 'reference',
            to: [{type: 'articles'}]        
        },
        {
            name: 'mobileImage',
            title: "Image bannière mobile",
            type: 'image'
        },
        {
            name: 'mobileDesktop',
            title: "Image bannière desktop",
            type: 'image'
        }
    ]
});