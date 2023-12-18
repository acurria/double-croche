import { defineType } from "sanity";

export default defineType({
    name: 'platforms',
    title: 'Plateformes',
    type: 'document',
    fields: [
        {
            name: 'platformName',
            title: 'Nom de la plateforme',
            type: 'string'
        }
    ]
});