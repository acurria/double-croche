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
                "categorySlug": article->category->slug.current,
                "subcategory": article->subcategory->title,
                "subcategorySlug": article->subcategory->slug.current,
                "musicFestivalName": article->musicFestivalName->title,
                "filmFestivalName": article->filFestivalName->title,
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
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'interview' && <Link className="link-image" href={data[0].url}>
                        <span className='read-article link-to hidden lg:block'>Lire l'article</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'festival' && <Link className="link-image" href={data[0].url}>
                        <span className='read-article link-to hidden lg:block'>Lire l'article</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'festival' && <Link className="link-image" href={data[0].url}>
                        <span className='read-article link-to hidden lg:block'>Lire l'article</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'chronique' && <Link className="link-image" href={data[0].url}>
                        <span className='read-article link-to hidden lg:block'>Lire l'article</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'interview' && <Link className="link-image" href={data[0].url}>
                        <span className='read-article link-to hidden lg:block'>Lire l'article</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'playlist' && <Link className="link-image" href={data[0].externalLink}>
                        <span className='read-article link-to hidden lg:block'>Écouter sur Spotify</span>
                    </Link>
                }
                {
                    data[0].categorySlug === 'concours' && <Link className="link-image" href={data[0].externalLink}>
                        <span className='read-article link-to hidden lg:block'>Voir le post sur Instagram</span>
                    </Link>
                }
                <p className='category-subcategory'>
                    <span className='category'>{data[0].category}</span>
                    {
                        data[0].categorySlug !== 'concours' && <span className='subcategory'> - [{data[0].subcategory}]</span>
                    }
                    {
                        data[0].categorySlug === 'concours' && <span className='subcategory'> - {data[0].artist}</span>
                    }
                </p>
                <p className='title-info'>
                    <span className='info'>
                        {
                            data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'interview' && <span><span className="uppercase highlight-secondary">{data[0].artist}</span> <span className="text-info">pour “{data[0].album}”</span></span>
                        }
                        {
                            data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'playlist' && <span><span className="uppercase highlight-secondary">{data[0].month}</span> <span className="text-info">{data[0].year} ({data[0].part})</span></span>
                        }
                        {
                            data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'festival' && <span><span className="uppercase highlight-secondary">{data[0].musicFestivalName} - </span> <span className="text-info">{data[0].city} {data[0].year}</span></span>
                        }
                        {
                            data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'festival' && <span><span className="uppercase highlight-secondary">{data[0].filmFestivalName} - </span> <span className="text-info">{data[0].year}</span></span>
                        }
                        {
                            data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'chronique' && <span><span className="uppercase highlight-secondary">“{data[0].filmTitle}“</span> <span className="text-info">de {data[0].director}</span></span>
                        }
                        {
                            data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'interview' && <span><span className="uppercase highlight-secondary">{data[0].director}</span> <span className="text-info">pour “{data[0].filmTitle}”</span></span>
                        }
                        {
                            data[0].categorySlug === 'concours' && <span className='subcategory'><span className='highlight-secondary'>@ {data[0].localisation}</span> <span className="text-info">{data[0].date}</span></span>
                        }
                    </span>
                </p>
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'interview' && <Link className="link" href={data[0].url}>Lire l'article</Link>
                }
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'festival' && <Link className="link" href={data[0].url}>Lire l'article</Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'festival' && <Link className="link" href={data[0].url}>Lire l'article</Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'chronique' && <Link className="link" href={data[0].url}>Lire l'article</Link>
                }
                {
                    data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'interview' && <Link className="link" href={data[0].url}>Lire l'article</Link>
                }
                {
                    data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'playlist' && <Link className="link" href={data[0].externalLink}>Écouter sur Spotify</Link>
                }
                {
                    data[0].categorySlug === 'concours' && <Link className="link" href={data[0].externalLink}>Voir le post sur Instagram</Link>
                }
            </div>
        </main>
    )
}
