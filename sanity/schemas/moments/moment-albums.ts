import { defineType } from "sanity";

export default defineType({
    name: 'momentAlbums',
    title: 'Albums du moment',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Titre de l'album (Pour la preview en Back-Office)",
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
            name: 'titleAlbum',
            title: "Titre de l'album",
            type: 'reference',
            to: [{type: 'albums'}],
            validation: Rule => Rule.required() 
        },
        {
            name: 'artist',
            title: "Artiste",
            type: 'reference',
            to: [{type: 'artists'}],
            validation: Rule => Rule.required()  
        },
        {
            name: 'link',
            title: "Lien Spotify",
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