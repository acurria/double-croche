import { defineType } from "sanity";

export default defineType({
    name: 'momentFilms',
    title: 'Films du moment',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Titre du film (Pour la preview en Back-Office)",
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: "Image - Ratio 1:1",
            type: 'image',
            validation: Rule => Rule.required()
        },
        {
            name: 'titleFilm',
            title: "Titre du film",
            type: 'reference',
            to: [{type: 'films'}],
            validation: Rule => Rule.required() 
        },
        {
            name: 'director',
            title: "Réalisateur",
            type: 'reference',
            to: [{type: 'directors'}],
            validation: Rule => Rule.required()
        },
        {
            name: 'link',
            title: "Lien Allociné",
            type: 'url',
            validation: Rule => Rule.required()
        }
    ],
    preview: {
        select: {
            media: 'image',
            title: 'title',
        }
    }
});