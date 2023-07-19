import {createClient} from "@sanity/client";
import {groq} from "next-sanity";

const client = createClient({projectId: '5ouijukq', dataset:'production', apiVersion:'2022-11-11', useCdn:true})
export default client;

export async function getArticle(slug: string) {
    return client.fetch(
        groq`*[_type=="articles" && slug.current == '${slug}'][0] {
              "artist": artist->firstLastName,
              "image": image.asset->url,
              "album": album->title,
              "category": category->title,
              "categorySlug": category->slug.current,
              "subcategory": subcategory->title,
              "subcategorySlug": subcategory->slug.current,
              "musicFestivalName": musicFestivalName->title,
              "filmFestivalName": filmFestivalName->title,
              "city": city,
              "year": year,
              "month": month,
              "part": part,
              "director": director->firstLastName,
              "filmTitle": filmTitle->title,
              "date": date,
              "localisation": localisation,
              "externalLink": link,
              "url": slug.current,
              "content": content,
              "title": title,
              "metadescription": metadescription
        }`,
        {slug}
    )
}