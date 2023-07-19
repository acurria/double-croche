"use client"; 

import client from "../../createClient";
import {useQuery} from "react-query";
import Link from "next/link";
import Image from "next/image";
import imageUrlBuilder from '@sanity/image-url'

interface propsType {
	id:string
}

export default function PreviewFilm({id}:propsType) {

	const builder = imageUrlBuilder(client)
	function urlFor(source:any) {
		return builder.image(source)
	}

	const {data, status} = useQuery(
		'elementsPreviewFilm_'+id, async(context) => {
			const query = `*[_type=="momentFilms" && _id=='${id}']{
				"image": image.asset->url,
				"director": director->firstLastName,
				"film": titleFilm->title,
				"externalUrl": link
			}`;
			return await client.fetch(query);
		}
	);

	if (status !== 'success') {
		return <></>
		// Create loader to wait
	}

	return (
		<div className='film'>
			<Link className="film-image-link" href={data[0].externalUrl} aria-label="En savoir plus" target="_blank">
				<span className='link-to hidden lg:block'>En savoir plus</span>
				<Image
					className="image-film"
					src={urlFor(data[0].image).url()}
					alt="Film cover"
					width={800}
					height={800}
				/>
			</Link>
			<p className='film-artist'>{data[0].director}</p>
			<p className='film-name'>'{data[0].film}'</p>
		</div>
	)
}
