import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import deskStructure from './sanity/deskStructure'
import schemaTypes from './sanity/schemas'

export default defineConfig({
    name: 'default',
    title: 'double-croche-sanity',

    basePath: '/admin',
    apiVersion: '2023-03-04',

    projectId: '5ouijukq',
    dataset: 'production',

    plugins: [
        deskTool({
            structure: deskStructure
        }),
        visionTool()
    ],

    schema: {
        types: schemaTypes,
    },
})
