import { defineType } from "sanity";

export default defineType({
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug'
        },
        {
            name: 'category',
            title: 'Catégorie',
            type: 'reference',
            to: [{type: 'categories'}]        
        },
        {
            name: 'subcategory',
            title: 'Sous-Catégorie',
            type: 'reference',
            to: [{type: 'subcategories'}]        
        },
        {
            // Pour "Musique Interview", "Musique Festival", "Cinéma Interview", "Cinéma Chronique", "Cinéma Festival"
            name: 'rectangleImage',
            title: "Image - Ratio 3:2 (Sauf pour les Playlists et Concours où le ratio est de 1:1)",
            type: 'image'
        },
        {
            // Pour "Musique Playlist" et "Concours"
            name: 'squareImage',
            title: "Image - Ratio 1:1",
            type: 'image'
        },
        {
            // Pour "Musique Interview", "Concours"
            name: 'artist',
            title: "Artiste",
            type: 'reference',
            to: [{type: 'artists'}]   
        },
        {
            // Pour "Musique Interview"
            name: 'album',
            title: "Album",
            type: 'reference',
            to: [{type: 'albums'}]  
        },
        {
            // Pour "Musique Playlist"
            name: 'month',
            title: "Mois",
            type: 'string'
        },
        {
            // Pour "Musique Playlist", "Musique Concours"
            name: 'link',
            title: "Lien",
            type: 'url'
        },
        {
            // Pour "Musique Festival", "Musique Playlist", "Cinéma Festival"
            name: 'year',
            title: "Année",
            type: 'number'
        },
        {
            // Pour "Musique Interview"
            name: 'part',
            title: "Partie",
            type: 'string'
        },
        {
            // Pour "Musique Festival"
            name: 'musicFestivalName',
            title: "Nom du festival",
            type: 'reference',
            to: [{type: 'musicFestivals'}]   
        },
        {
            // Pour "Cinéma Festival"
            name: 'filmFestivalName',
            title: "Nom du festival",
            type: 'reference',
            to: [{type: 'filmFestivals'}]   
        },
        {
            // Pour "Musique Festival"
            name: 'city',
            title: "Ville",
            type: 'string'
        },
        {
            // Pour "Cinéma Interview" et "Cinéma Chronique"
            name: 'director',
            title: "Réalisateur",
            type: 'reference',
            to: [{type: 'directors'}]  
        },
        {
            // Pour "Cinéma Interview" et "Cinéma Chronique"
            name: 'filmTitle',
            title: "Titre du film",
            type: 'reference',
            to: [{type: 'films'}]  
        },
        {
            // Pour "Cinéma Festival"
            name: 'day',
            title: "Jour",
            type: 'string'
        },
        {
            // Pour "Concours"
            name: 'localisation',
            title: "Lieu",
            type: 'string'
        },
        {
            // Pour "Concours"
            name: 'date',
            title: "Date",
            type: 'date'
        },
        {
            // Pour "Musique Interview", "Musique Festival", "Cinéma Interview", "Cinéma Chronique", "Cinéma Festival"
            name: 'content',
            title: 'Description', 
            type: 'array', 
            of: [{type: 'block'}]
        }
    ]
});