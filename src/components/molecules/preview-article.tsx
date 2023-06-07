"use client"; 

import Image from 'next/image'
import {useQuery} from 'react-query'

import client from "../../createClient";
import Link from "next/link";

interface propsType {
	id:string
}

export default function PreviewArticle({id}:propsType) {

	const {data, status} = useQuery(
		'elementsPreviewArticle', async(context) => {
			const query = `*[_type=="articles" && _id=='${id}']{
			  "artist": artist->firstLastName,
			  "image": image.asset._ref,
			  "album": album->title,
			  "category": category->title,
			  "subcategory": subcategory->title,
			  "musicFestivalName": musicFestivalName->title,
			  "musicFestivalName": musicFestivalName->title,
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
		return <></>
		// Create loader to wait
	}
	console.log(data);


	return (
		<main className='preview-article'>
			<Link className="link-image" href={data[0].url}>
				<span className='read-article link-to hidden lg:block'>Voir l'article</span>
				<Image
					className="image-preview-article"
					src="/placeholder.png"
					alt="Vercel Logo"
					width={500}
					height={24}
					priority
				/>
			</Link>
			<p className='category-subcategory'>
				<span className='category'>{data[0].category}</span>
				<span className='subcategory'> - [{data[0].subcategory}]</span>
			</p>
			<p className='title-info'>
				<span className='info'><span className='highlight-secondary'>{data[0].artist}</span> pour “{data[0].album}”</span>
			</p>
			<Link className="link" href={data[0].url}>Lire l'article</Link>
		</main>
	)
}
