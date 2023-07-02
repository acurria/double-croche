"use client"; 

import {useQuery} from 'react-query'

import client from "../../createClient";
import Link from "next/link";

import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image";

interface propsType {
	id:string
}

export default function PreviewArticle({id}:propsType) {

	const builder = imageUrlBuilder(client)
	function urlFor(source:any) {
		return builder.image(source)
	}

	const {data, status} = useQuery(
		'elementsPreviewArticle_'+id, async(context) => {
			const query = `*[_type=="articles" && _id=='${id}']{
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
			  "url": slug.current
			}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <>
			<Image
				src="/logo-black.png"
				alt="Double-Croche Logo"
				className="main-logo mr-2 inline-block bg-white"
				width={60}
				height={86}
			/>
		</>
		// Create loader to wait
	}

	return (
		<main className='preview-article'>
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'playlist' && <Link className="link-image" href={data[0].externalLink} target='_blank'>
					<span className='read-article link-to hidden lg:block'>Écouter sur Spotify</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'concours' && <Link className="link-image" href={data[0].externalLink} target='_blank'>
					<span className='read-article link-to hidden lg:block'>Voir le post sur Instagram</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'interview' && <Link className="link-image" href={`/articles/${data[0].url}`}>
					<span className='read-article link-to hidden lg:block'>Lire l'article</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'festival' && <Link className="link-image" href={`/articles/${data[0].url}`}>
					<span className='read-article link-to hidden lg:block'>Lire l'article</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'festival' && <Link className="link-image" href={`/articles/${data[0].url}`}>
					<span className='read-article link-to hidden lg:block'>Lire l'article</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'chronique' && <Link className="link-image" href={`/articles/${data[0].url}`}>
					<span className='read-article link-to hidden lg:block'>Lire l'article</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
				</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'interview' && <Link className="link-image" href={`/articles/${data[0].url}`}>
					<span className='read-article link-to hidden lg:block'>Lire l'article</span>
					<img
						className="image-preview-article"
						src={urlFor(data[0].image).url()}
						alt="Vercel Logo"
						loading="lazy"
					/>
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
						data[0].categorySlug === 'concours' && <span className='subcategory'><span className=''>@ {data[0].localisation}</span> <span className="text-info">{data[0].date}</span></span>
					}
				</span>
			</p>
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'interview' && <Link className="link" href={`/articles/${data[0].url}`}>Lire l'article</Link>
			}
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'festival' && <Link className="link" href={`/articles/${data[0].url}`}>Lire l'article</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'festival' && <Link className="link" href={`/articles/${data[0].url}`}>Lire l'article</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'chronique' && <Link className="link" href={`/articles/${data[0].url}`}>Lire l'article</Link>
			}
			{
				data[0].categorySlug === 'cinema' && data[0].subcategorySlug === 'interview' && <Link className="link" href={`/articles/${data[0].url}`}>Lire l'article</Link>
			}
			{
				data[0].categorySlug === 'musique' && data[0].subcategorySlug === 'playlist' && <Link className="link" href={data[0].externalLink} target='_blank'>Écouter sur Spotify</Link>
			}
			{
				data[0].categorySlug === 'concours' && <Link className="link" href={data[0].externalLink} target='_blank'>Voir le post sur Instagram</Link>
			}
		</main>
	)
}
