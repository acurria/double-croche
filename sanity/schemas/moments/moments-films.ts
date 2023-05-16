import { defineType } from "sanity";

export default defineType({
    name: 'momentFilms',
    title: 'Films du moment',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: "Image - Ratio 1:1",
            type: 'image'
        },
        {
            name: 'title',
            title: "Titre du film",
            type: 'reference',
            to: [{type: 'films'}]  
        },
        {
            name: 'director',
            title: "Réalisateur",
            type: 'reference',
            to: [{type: 'directors'}]
        },
        {
            name: 'link',
            title: "Lien Allociné",
            type: 'url'
        }
    ]
});