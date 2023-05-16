import { defineType } from "sanity";

export default defineType({
    name: 'artists',
    title: 'Artistes',
    type: 'document',
    fields: [
        {
            name: 'firstLastName',
            title: 'Prénom et nom',
            type: 'string'
        }
    ]
});