import { defineType } from "sanity";

export default defineType({
    name: 'momentAlbums',
    title: 'Albums du moment',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: "Image - Ratio 1:1",
            type: 'image'
        },
        {
            name: 'title',
            title: "Titre de l'album",
            type: 'reference',
            to: [{type: 'albums'}]  
        },
        {
            name: 'artist',
            title: "Artiste",
            type: 'reference',
            to: [{type: 'artists'}]  
        },
        {
            name: 'link',
            title: "Lien Spotify",
            type: 'url'
        }
    ]
});