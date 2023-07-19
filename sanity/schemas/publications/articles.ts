import { defineType } from "sanity";

export default defineType({
    name: 'articles',
    title: 'Articles',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: "Titre de l'article",
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
            name: 'category',
            title: 'Catégorie',
            type: 'reference',
            to: [{type: 'categories'}],
            validation: Rule => Rule.required()      
        },
        {
            name: 'subcategory',
            title: 'Sous-Catégorie',
            type: 'reference',
            to: [{type: 'subcategories'}]       
        },
        {
            // Pour "Musique Interview", "Cinéma Interview", "Cinéma Chronique", "Cinéma Festival"
            name: 'image',
            title: "Image - Ratio 3:2 pour les articles Musique Interview, Cinéma Interview, Cinéma Chronique, Cinéma Festival et Ratio 1:1 pour les articles Musique Playlist, Musique Festivals, Concours",
            type: 'image'
        },
        {
            // Pour "Musique Interview", "Concours"
            name: 'artist',
            title: "Artiste (Musique Interview, Concours)",
            type: 'reference',
            to: [{type: 'artists'}]   
        },
        {
            // Pour "Musique Interview"
            name: 'album',
            title: "Album (Musique Interview)",
            type: 'reference',
            to: [{type: 'albums'}]  
        },
        {
            // Pour "Musique Playlist"
            name: 'month',
            title: "Mois (Musique Playlist)",
            type: 'string'
        },
        {
            // Pour "Musique Playlist", "Concours"
            name: 'link',
            title: "Lien (Musique Playlist, Musique Concours)",
            type: 'url'
        },
        {
            // Pour "Musique Festival", "Musique Playlist", "Cinéma Festival"
            name: 'year',
            title: "Année (Musique Festival, Musique Playlist, Cinéma Festival)",
            type: 'number'
        },
        {
            // Pour "Musique Playlist"
            name: 'part',
            title: "Partie (Musique Playlist)",
            type: 'string'
        },
        {
            // Pour "Musique Festival"
            name: 'musicFestivalName',
            title: "Nom du festival (Musique Festival)",
            type: 'reference',
            to: [{type: 'musicFestivals'}]   
        },
        {
            // Pour "Cinéma Festival"
            name: 'filmFestivalName',
            title: "Nom du festival (Cinéma Festival)",
            type: 'reference',
            to: [{type: 'filmFestivals'}]   
        },
        {
            // Pour "Musique Festival"
            name: 'city',
            title: "Ville (Musique Festival)",
            type: 'string'
        },
        {
            // Pour "Cinéma Interview" et "Cinéma Chronique"
            name: 'director',
            title: "Réalisateur (Cinéma Interview et Cinéma Chronique)",
            type: 'reference',
            to: [{type: 'directors'}]  
        },
        {
            // Pour "Cinéma Interview" et "Cinéma Chronique"
            name: 'filmTitle',
            title: "Titre du film (Cinéma Interview et Cinéma Chronique)",
            type: 'reference',
            to: [{type: 'films'}]  
        },
        {
            // Pour "Cinéma Festival"
            name: 'day',
            title: "Jour (Cinéma Festival)",
            type: 'string'
        },
        {
            // Pour "Concours"
            name: 'localisation',
            title: "Lieu (Concours)",
            type: 'string'
        },
        {
            // Pour "Concours"
            name: 'date',
            title: "Date (Concours)",
            type: 'date',
            options: {
                dateFormat: 'DD-MM-YYYY'
            }
        },
        {
            // Pour "Musique Interview", "Musique Festival", "Cinéma Interview", "Cinéma Chronique", "Cinéma Festival"
            name: 'content',
            title: 'Description (Musique Interview, Musique Festival, Cinéma Interview, Cinéma Chronique, Cinéma Festival', 
            type: 'array', 
            of: [
                {type: 'block'},
                {type: 'image'}
            ]
        },
        {
            name: 'metadescription',
            title: "Méta-Description pour le référencement - À indiquer pour : Musique Interview, Musique Festival, Cinéma Interview, Cinéma Chronique, Cinéma Festival",
            type: 'string',
        },
        {
            name: 'createdDate',
            title: "Date/heure de création de l'article",
            type: 'datetime',
            options: {
                dateFormat: 'DD-MM-YYYY',
                timeFormat: 'HH:mm:ss',
            }
        },
        {
            name: 'hidePublication',
            title: "Masquer la publication (L'article sera visible en tapant directement son URL, mais ne remontera pas dans la liste des catégories)",
            type: 'boolean'
        },
    ],
    preview: {
        select: {
            media: 'image',
            title: 'title',
        }
    }
});