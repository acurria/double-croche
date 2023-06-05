import { BlockContentIcon } from '@sanity/icons'
import { CalendarIcon } from '@sanity/icons'
import { BlockElementIcon } from '@sanity/icons'
import { ClipboardIcon } from '@sanity/icons'

export default(S: any) => {
    return S.list()
        .title('Administration')
        .items([
            S.listItem().title("Publications").icon(BlockContentIcon).child(
                S.list().showIcons(false).title("Articles et Catégories").items([
                    S.listItem().title("Articles").child(S.documentTypeList("articles")),
                    S.listItem().title("Catégories").child(S.documentTypeList("categories")),
                    S.listItem().title("Sous-catégories").child(S.documentTypeList("subcategories"))
                ])
            ),
            S.listItem().title("En ce moment").icon(ClipboardIcon).child(
                S.list().showIcons(false).title("Films et Albums du moment").items([
                    S.listItem().title("Films du moment").child(S.documentTypeList("momentFilms")),
                    S.listItem().title("Albums du moment").child(S.documentTypeList("momentAlbums"))
                ])
            ),
            S.listItem().title("Agenda").icon(CalendarIcon).child(
                S.list().showIcons(false).title("Évènements passés et à venir").items([
                    S.listItem().title("Évènements").child(S.documentTypeList("events")),
                    S.listItem().title("Types d'évènement").child(S.documentTypeList("eventTypes"))
                ])
            ),
            S.listItem().title("Bannières").icon(BlockElementIcon).child(
                S.list().showIcons(false).title("Page d'accueil").items([
                    S.listItem().title("Bannières page d'accueil").child(S.documentTypeList("banner"))
                ])
            ),
        ])
}