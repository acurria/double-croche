"use client";

import Image from 'next/image'
import {useQuery} from 'react-query'

import client from "../../createClient";
import Link from "next/link";

export default function BannerHomepage() {

    const {data, status} = useQuery(
        'elementsBannerHomepage', async(context) => {
            const query = `*[_type=="banner"]{
                "mobileImage": mobileImage.asset->url,
                "desktopImage": desktopImage.asset->url,
                "artist": article->artist->firstLastName,
                "album": article->album->title,
                "category": article->category->title,
                "subcategory": article->subcategory->title,
                "musicFestivalName": article->musicFestivalName->title,
                "filmFestivalName": article->filFestivalName->titlea,
                "city": article->city,
                "year": article->year,
                "month": article->month,
                "part": article->part,
                "director": article->director->firstLastName,
                "filmTitle": article->filmTitle->title,
                "date": article->date,
                "localisation": article->localisation,
                "externalLink": article->link,
                "url": article->slug.current
                }`;
            return await client.fetch(query);
        }
    );

    if (status !== 'success') {
        return <></>
        // Create loader to wait
    }

    return (
        <main className="banner-container flex justify-end items-end">
            <Image
                src={data[0].mobileImage}
                alt="/placeholder.png"
                className="background-image backgound-banner-image-mobile lg:hidden"
                width={1920}
                height={1080}
            />
            <Image
                src={data[0].desktopImage}
                alt="Banner Background"
                className="background-image backgound-banner-image-desktop hidden lg:block"
                width={1920}
                height={1080}
            />
            <div className='preview-article'>
                <Link className="link-image" href='#'>
                    <span className='read-article link-to hidden lg:block'>Voir l'article</span>
                </Link>
                <p className='category-subcategory'>
                    <span className='category'>{data[0].category}</span>
                    <span className='subcategory'> - [{data[0].subcategory}]</span>
                </p>
                <p className='title-info'>
                    <span className='info'><span className='highlight-secondary'>{data[0].artist}</span> pour “{data[0].album}”</span>
                </p>
                <Link className="link" href='#'>Lire l'article</Link>
            </div>
        </main>
    )
}
