import { defineType } from "sanity";

export default defineType({
    name: 'directors',
    title: 'Réalisateurs',
    type: 'document',
    fields: [
        {
            name: 'firstLastName',
            title: 'Prénom et nom',
            type: 'string'
        }
    ]
});